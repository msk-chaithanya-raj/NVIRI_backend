const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const cors = require("cors");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
const e = require("express");

const app = express();
app.use(cors());
app.use(bodyParser.json());

const db = new sqlite3.Database("./appliance_repair.db");

app.get("/api/locations", (request, response) => {
  db.all("SELECT * FROM locations", [], (err, rows) => {
    if (err) return response.status(500).json({ error: err.message });
    response.json(rows);
  });
});

app.get("/api/appliances", (request, response) => {
  const query = request.query.query || "";
  db.all(
    "SELECT * FROM appliances WHERE name LIKE ?;",
    [`%${query}%`],
    (err, rows) => {
      if (err) return response.status(500).json({ error: err.message });
      response.json(rows);
    }
  );
});

app.get("/api/technicians", (request, response) => {
  const query = request.query.specialization || "";
  db.all(
    "SELECT * FROM technicians WHERE specialization LIKE ?;",
    [`%${query}%`],
    (err, rows) => {
      if (err) return response.status(500).json({ error: err.message });
      response.json(rows);
    }
  );
});

app.listen(5000, () => console.log("Server running at PORT 5000"));
