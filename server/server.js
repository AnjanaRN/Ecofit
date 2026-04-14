const express = require("express");
const cors = require("cors");
const sqlite3 = require("sqlite3").verbose();

const app = express();
app.use(cors());
app.use(express.json());

// Create/connect SQLite database
const db = new sqlite3.Database("./ecofit.db", (err) => {
  if (err) {
    console.error(err.message);
  } else {
    console.log("Connected to SQLite database");
  }
});

// Create table if it doesn't exist
db.run(`
  CREATE TABLE IF NOT EXISTS wardrobe (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    garment_name TEXT,
    garment_type TEXT,
    primary_material TEXT,
    score INTEGER,
    water REAL,
    carbon REAL,
    toxicity TEXT,
    rating TEXT
  )
`);

// Test route
app.get("/", (req, res) => {
  res.send("EcoFit SQLite backend running");
});

// Save item
app.post("/wardrobe", (req, res) => {
  const {
    garmentName,
    garmentType,
    primaryMaterial,
    score,
    water,
    carbon,
    toxicity,
    rating
  } = req.body;

  const sql = `
    INSERT INTO wardrobe
    (garment_name, garment_type, primary_material, score, water, carbon, toxicity, rating)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
  `;

  db.run(
    sql,
    [garmentName, garmentType, primaryMaterial, score, water, carbon, toxicity, rating],
    function (err) {
      if (err) {
        console.error(err.message);
        res.status(500).json({ message: "Error saving item" });
      } else {
        res.json({ message: "Saved successfully", id: this.lastID });
      }
    }
  );
});

// Get all items
app.get("/wardrobe", (req, res) => {
  db.all("SELECT * FROM wardrobe ORDER BY id DESC", [], (err, rows) => {
    if (err) {
      console.error(err.message);
      res.status(500).json({ message: "Error fetching data" });
    } else {
      res.json(rows);
    }
  });
});

// Delete item
app.delete("/wardrobe/:id", (req, res) => {
  const id = req.params.id;

  db.run("DELETE FROM wardrobe WHERE id = ?", [id], function (err) {
    if (err) {
      console.error(err.message);
      res.status(500).json({ message: "Error deleting item" });
    } else {
      res.json({ message: "Deleted successfully" });
    }
  });
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});