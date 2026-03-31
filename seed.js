// Run this once after first deploy to seed the existing lineup data
// Usage: node seed.js

const fs = require("fs");
const path = require("path");

const DATA_DIR = path.join(__dirname, "data");
const LINEUPS_FILE = path.join(DATA_DIR, "lineups.json");

if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });

// All lineup data from the Crimson Crush Google Sheet / Excel workbook
const SEED_DATA = {
  "Mandarin": {
    "Marcus": {
      lineup: { players: [
        { battingOrder:1, name:"Malcolm", positions:["SS","SS","1B","1B","Bench","SS"] },
        { battingOrder:2, name:"Leslie", positions:["3B","3B","3B","3B","3B","3B"] },
        { battingOrder:3, name:"Marcus", positions:["P","P","P","P","Bench","P"] },
        { battingOrder:4, name:"EJ", positions:["C","C","Bench","C","C","C"] },
        { battingOrder:5, name:"Erin", positions:["LF","LF","LF","LF","LF","LF"] },
        { battingOrder:6, name:"Yada", positions:["1B","1B","Bench","Bench","1B","1B"] },
        { battingOrder:7, name:"Ian", positions:["CF","CF","CF","Bench","Bench","CF"] },
        { battingOrder:8, name:"Jordan", positions:["Bench","Bench","C","CF","P","Bench"] },
        { battingOrder:9, name:"Kirsten", positions:["RF","RF","RF","RF","RF","RF"] },
        { battingOrder:10, name:"Larry", positions:["Bench","Bench","SS","Bench","SS","Bench"] },
        { battingOrder:11, name:"Wells", positions:["Bench","Bench","Bench","SS","CF","Bench"] },
        { battingOrder:12, name:"Amira", positions:["2B","Bench","Bench","2B","Bench","Bench"] },
        { battingOrder:13, name:"Erica", positions:["Bench","2B","Bench","Bench","Bench","2B"] },
        { battingOrder:14, name:"Zebiba", positions:["Bench","Bench","2B","Bench","2B","Bench"] },
      ]},
      submittedAt: "2026-03-30T00:00:00.000Z",
      updatedAt: "2026-03-30T00:00:00.000Z",
    },
    "Ian": {
      lineup: { players: [
        { battingOrder:1, name:"EJ", positions:["C","Bench","C","C","C","C"] },
        { battingOrder:2, name:"Leslie", positions:["3B","Bench","3B","3B","3B","3B"] },
        { battingOrder:3, name:"Marcus", positions:["P","P","P","P","P","P"] },
        { battingOrder:4, name:"Erin", positions:["LF","LF","LF","LF","LF","LF"] },
        { battingOrder:5, name:"Yada", positions:["1B","1B","1B","Bench","1B","1B"] },
        { battingOrder:6, name:"Ian", positions:["CF","CF","Bench","CF","CF","CF"] },
        { battingOrder:7, name:"Kirsten", positions:["RF","RF","Bench","RF","RF","RF"] },
        { battingOrder:8, name:"Larry", positions:["Bench","Bench","SS","Bench","Bench","Bench"] },
        { battingOrder:9, name:"Wells", positions:["Bench","SS","CF","SS","Bench","Bench"] },
        { battingOrder:10, name:"Amira", positions:["2B","2B","Bench","Bench","2B","2B"] },
        { battingOrder:11, name:"Jordan", positions:["SS","C","Bench","1B","SS","Bench"] },
        { battingOrder:12, name:"Erica", positions:["Bench","3B","Bench","2B","Bench","Bench"] },
        { battingOrder:13, name:"Empress", positions:["Bench","Bench","2B","Bench","Bench","Bench"] },
        { battingOrder:14, name:"Bee", positions:["Bench","Bench","RF","Bench","Bench","Bench"] },
      ]},
      submittedAt: "2026-03-30T00:00:00.000Z",
      updatedAt: "2026-03-30T00:00:00.000Z",
    },
    "Leslie": {
      lineup: { players: [
        { battingOrder:1, name:"EJ", positions:["C","Bench","C","C","C","C"] },
        { battingOrder:2, name:"Leslie", positions:["3B","Bench","3B","3B","3B","3B"] },
        { battingOrder:3, name:"Amira", positions:["2B","2B","Bench","Bench","2B","2B"] },
        { battingOrder:4, name:"Marcus", positions:["P","P","Bench","P","P","P"] },
        { battingOrder:5, name:"Erin", positions:["LF","LF","Bench","LF","LF","LF"] },
        { battingOrder:6, name:"Larry", positions:["Bench","SS","SS","Bench","Bench","Bench"] },
        { battingOrder:7, name:"Yada", positions:["1B","1B","1B","Bench","1B","1B"] },
        { battingOrder:8, name:"Ian", positions:["CF","CF","Bench","CF","CF","CF"] },
        { battingOrder:9, name:"Jordan", positions:["SS","C","P","1B","SS","SS"] },
        { battingOrder:10, name:"Kirsten", positions:["RF","RF","RF","RF","Bench","RF"] },
        { battingOrder:11, name:"Erica", positions:["Bench","3B","2B","Bench","Bench","Bench"] },
        { battingOrder:12, name:"Wells", positions:["Bench","Bench","CF","SS","Bench","Bench"] },
        { battingOrder:13, name:"B", positions:["Bench","Bench","LF","2B","RF","Bench"] },
      ]},
      submittedAt: "2026-03-30T00:00:00.000Z",
      updatedAt: "2026-03-30T00:00:00.000Z",
    },
    "Jordan": {
      lineup: { players: [
        { battingOrder:1, name:"Malcolm", positions:["SS","CF","Bench","1B","Bench","SS"] },
        { battingOrder:2, name:"Leslie", positions:["3B","3B","3B","3B","3B","3B"] },
        { battingOrder:3, name:"Marcus", positions:["P","P","P","P","Bench","P"] },
        { battingOrder:4, name:"EJ", positions:["C","C","Bench","C","C","C"] },
        { battingOrder:5, name:"Erin", positions:["LF","LF","LF","LF","LF","LF"] },
        { battingOrder:6, name:"Yada", positions:["1B","1B","Bench","Bench","1B","1B"] },
        { battingOrder:7, name:"Ian", positions:["CF","SS","SS","Bench","Bench","CF"] },
        { battingOrder:8, name:"Jordan", positions:["Bench","C","C","CF","P","Bench"] },
        { battingOrder:9, name:"Kirsten", positions:["RF","RF","RF","RF","RF","RF"] },
        { battingOrder:10, name:"Larry", positions:["Bench","Bench","Bench","Bench","SS","Bench"] },
        { battingOrder:11, name:"Wells", positions:["Bench","Bench","Bench","SS","CF","Bench"] },
        { battingOrder:12, name:"Amira", positions:["2B","Bench","2B","2B","Bench","Bench"] },
        { battingOrder:13, name:"Erica", positions:["Bench","2B","Bench","Bench","Bench","2B"] },
        { battingOrder:14, name:"Zebiba", positions:["Bench","Bench","Bench","Bench","2B","RF"] },
      ]},
      submittedAt: "2026-03-30T00:00:00.000Z",
      updatedAt: "2026-03-30T00:00:00.000Z",
    },
    "Kirsten": {
      lineup: { players: [
        { battingOrder:1, name:"Jordan", positions:["SS","SS","1B","C","SS","SS"] },
        { battingOrder:2, name:"Leslie", positions:["3B","Bench","3B","3B","3B","3B"] },
        { battingOrder:3, name:"Marcus", positions:["P","P","P","P","P","3B"] },
        { battingOrder:4, name:"Amira", positions:["RF","RF","Bench","Bench","Bench","P"] },
        { battingOrder:5, name:"EJ", positions:["C","C","C","Bench","C","RF"] },
        { battingOrder:6, name:"Erin", positions:["3B","CF","LF","Bench","LF","C"] },
        { battingOrder:7, name:"Wells", positions:["LF","Bench","Bench","Bench","Bench","3B"] },
        { battingOrder:8, name:"Yada", positions:["1B","1B","Bench","1B","1B","LF"] },
        { battingOrder:9, name:"Kirsten", positions:["2B","2B","2B","2B","2B","1B"] },
        { battingOrder:10, name:"Ian", positions:["CF","Bench","CF","CF","CF","2B"] },
        { battingOrder:11, name:"Larry", positions:["Bench","Bench","SS","Bench","Bench","CF"] },
        { battingOrder:12, name:"Empress", positions:["Bench","3B","Bench","Bench","Bench","Bench"] },
        { battingOrder:13, name:"B", positions:["Bench","Bench","Bench","LF","Bench","Bench"] },
        { battingOrder:14, name:"Erica", positions:["Bench","Bench","RF","RF","Bench","Bench"] },
      ]},
      submittedAt: "2026-03-30T00:00:00.000Z",
      updatedAt: "2026-03-30T00:00:00.000Z",
    },
  },
  "Past BKE Lineup": {
    "Ian": {
      lineup: { players: [
        { battingOrder:1, name:"EJ", positions:["C","Bench","C","C","C","C"] },
        { battingOrder:2, name:"Leslie", positions:["3B","Bench","3B","3B","3B","3B"] },
        { battingOrder:3, name:"Marcus", positions:["P","P","P","P","P","P"] },
        { battingOrder:4, name:"Erin", positions:["LF","LF","LF","LF","LF","LF"] },
        { battingOrder:5, name:"Yada", positions:["1B","1B","1B","Bench","1B","1B"] },
        { battingOrder:6, name:"Ian", positions:["CF","CF","Bench","CF","CF","CF"] },
        { battingOrder:7, name:"Kirsten", positions:["RF","RF","Bench","RF","RF","RF"] },
        { battingOrder:8, name:"Larry", positions:["Bench","Bench","SS","Bench","Bench","Bench"] },
        { battingOrder:9, name:"Wells", positions:["Bench","SS","CF","SS","Bench","Bench"] },
        { battingOrder:10, name:"Amira", positions:["2B","2B","Bench","Bench","2B","2B"] },
        { battingOrder:11, name:"Jordan", positions:["SS","C","Bench","1B","SS","Bench"] },
        { battingOrder:12, name:"Erica", positions:["Bench","3B","Bench","2B","Bench","Bench"] },
        { battingOrder:13, name:"Empress", positions:["Bench","Bench","2B","Bench","Bench","Bench"] },
        { battingOrder:14, name:"Bee", positions:["Bench","Bench","RF","Bench","Bench","Bench"] },
      ]},
      submittedAt: "2026-03-30T00:00:00.000Z",
      updatedAt: "2026-03-30T00:00:00.000Z",
    },
    "Leslie": {
      lineup: { players: [
        { battingOrder:1, name:"EJ", positions:["C","Bench","C","C","C","C"] },
        { battingOrder:2, name:"Leslie", positions:["3B","Bench","3B","3B","3B","3B"] },
        { battingOrder:3, name:"Amira", positions:["2B","2B","Bench","Bench","2B","2B"] },
        { battingOrder:4, name:"Marcus", positions:["P","P","Bench","P","P","P"] },
        { battingOrder:5, name:"Erin", positions:["LF","LF","Bench","LF","LF","LF"] },
        { battingOrder:6, name:"Larry", positions:["Bench","SS","SS","Bench","Bench","Bench"] },
        { battingOrder:7, name:"Yada", positions:["1B","1B","1B","Bench","1B","1B"] },
        { battingOrder:8, name:"Ian", positions:["CF","CF","Bench","CF","CF","CF"] },
        { battingOrder:9, name:"Jordan", positions:["SS","C","P","1B","SS","SS"] },
        { battingOrder:10, name:"Kirsten", positions:["RF","RF","RF","RF","Bench","RF"] },
        { battingOrder:11, name:"Erica", positions:["Bench","3B","2B","Bench","Bench","Bench"] },
        { battingOrder:12, name:"Wells", positions:["Bench","Bench","CF","SS","Bench","Bench"] },
        { battingOrder:13, name:"B", positions:["Bench","Bench","LF","2B","RF","Bench"] },
      ]},
      submittedAt: "2026-03-30T00:00:00.000Z",
      updatedAt: "2026-03-30T00:00:00.000Z",
    },
  },
  "Playoffs Round 1": {},
  "Playoffs Round 2": {},
  "Playoffs Round 3": {},
};

fs.writeFileSync(LINEUPS_FILE, JSON.stringify(SEED_DATA, null, 2));
console.log("✅ Seeded lineup data:");
for (const [week, perps] of Object.entries(SEED_DATA)) {
  console.log(`   ${week}: ${Object.keys(perps).join(", ")}`);
}
console.log("\nDone! Lineups are ready.");
