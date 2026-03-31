const express = require("express");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3001;
const DATA_DIR = path.join(__dirname, "data");
const LINEUPS_FILE = path.join(DATA_DIR, "lineups.json");
const PINS_FILE = path.join(DATA_DIR, "pins.json");

// Ensure data directory exists
if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });

// Initialize files if they don't exist
if (!fs.existsSync(LINEUPS_FILE)) fs.writeFileSync(LINEUPS_FILE, JSON.stringify({}));
if (!fs.existsSync(PINS_FILE)) fs.writeFileSync(PINS_FILE, JSON.stringify({}));

// Helpers
function readJSON(file) {
  try { return JSON.parse(fs.readFileSync(file, "utf8")); }
  catch { return {}; }
}
function writeJSON(file, data) {
  fs.writeFileSync(file, JSON.stringify(data, null, 2));
}

app.use(cors());
app.use(express.json());

// Health check (also keeps Render free tier awake via UptimeRobot)
app.get("/", (req, res) => {
  res.json({ status: "ok", app: "Crimson Crush Lineup API", timestamp: new Date().toISOString() });
});

// GET all lineups (public — no PINs exposed)
// Returns: { "Mandarin": { "Marcus": { players: [...] }, "Ian": {...} }, "BKE": {...} }
app.get("/api/lineups", (req, res) => {
  const lineups = readJSON(LINEUPS_FILE);
  // Strip timestamps and metadata, return clean lineup data
  const clean = {};
  for (const [week, perspectives] of Object.entries(lineups)) {
    clean[week] = {};
    for (const [person, entry] of Object.entries(perspectives)) {
      clean[week][person] = entry.lineup;
    }
  }
  res.json(clean);
});

// GET lineups for a specific week
app.get("/api/lineups/:week", (req, res) => {
  const lineups = readJSON(LINEUPS_FILE);
  const week = req.params.week;
  if (!lineups[week]) return res.json({});
  const clean = {};
  for (const [person, entry] of Object.entries(lineups[week])) {
    clean[person] = entry.lineup;
  }
  res.json(clean);
});

// POST submit a lineup (private — requires name + PIN)
app.post("/api/lineup", async (req, res) => {
  const { name, pin, week, lineup } = req.body;

  if (!name || !pin || !week || !lineup) {
    return res.status(400).json({ error: "Missing required fields: name, pin, week, lineup" });
  }
  if (!lineup.players || !Array.isArray(lineup.players) || lineup.players.length < 1) {
    return res.status(400).json({ error: "Lineup must include at least 1 player" });
  }
  if (pin.length < 4) {
    return res.status(400).json({ error: "PIN must be at least 4 characters" });
  }

  // Check/set PIN for this person
  const pins = readJSON(PINS_FILE);
  const nameKey = name.toLowerCase().trim();

  if (pins[nameKey]) {
    // Verify existing PIN
    const match = await bcrypt.compare(pin, pins[nameKey]);
    if (!match) {
      return res.status(403).json({ error: "Wrong PIN. Use the same PIN you set on your first submission." });
    }
  } else {
    // First time — hash and store PIN
    const hashed = await bcrypt.hash(pin, 10);
    pins[nameKey] = hashed;
    writeJSON(PINS_FILE, pins);
  }

  // Save lineup
  const lineups = readJSON(LINEUPS_FILE);
  if (!lineups[week]) lineups[week] = {};
  lineups[week][name] = {
    lineup,
    submittedAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
  writeJSON(LINEUPS_FILE, lineups);

  res.json({
    success: true,
    message: `${name}'s lineup for ${week} saved.`,
    submittedAt: lineups[week][name].submittedAt,
  });
});

// DELETE a lineup (requires PIN)
app.delete("/api/lineup", async (req, res) => {
  const { name, pin, week } = req.body;
  if (!name || !pin || !week) return res.status(400).json({ error: "Missing fields" });

  const pins = readJSON(PINS_FILE);
  const nameKey = name.toLowerCase().trim();
  if (!pins[nameKey]) return res.status(404).json({ error: "No PIN found for this person" });

  const match = await bcrypt.compare(pin, pins[nameKey]);
  if (!match) return res.status(403).json({ error: "Wrong PIN" });

  const lineups = readJSON(LINEUPS_FILE);
  if (lineups[week]?.[name]) {
    delete lineups[week][name];
    writeJSON(LINEUPS_FILE, lineups);
  }
  res.json({ success: true, message: `${name}'s ${week} lineup deleted.` });
});

// GET list of weeks that have lineups
app.get("/api/weeks", (req, res) => {
  const lineups = readJSON(LINEUPS_FILE);
  const weeks = Object.keys(lineups).map(week => ({
    name: week,
    perspectives: Object.keys(lineups[week]),
    count: Object.keys(lineups[week]).length,
  }));
  res.json(weeks);
});

app.listen(PORT, () => {
  console.log(`Crimson Crush API running on port ${PORT}`);
});
