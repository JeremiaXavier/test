const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "toor",
  database: "test"
});

db.connect(() => {
  console.log("DB Connected");

  const createTable = `
    CREATE TABLE IF NOT EXISTS bookings (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(50),
      bus VARCHAR(50),
      seats INT
    )
  `;

  db.query(createTable, () =>
    console.log("Bookings table ready")
  );
});

app.get("/bookings", (req, res) => {
  db.query("SELECT * FROM bookings", (e, r) => res.json(r));
});

app.post("/bookings", (req, res) => {
  const { name, bus, seats } = req.body;
  db.query(
    "INSERT INTO bookings (name, bus, seats) VALUES (?, ?, ?)",
    [name, bus, seats],
    () => res.send("Booked")
  );
});

app.delete("/bookings/:id", (req, res) => {
  db.query(
    "DELETE FROM bookings WHERE id=?",
    [req.params.id],
    () => res.send("Cancelled")
  );
});

app.listen(5000, () => console.log("Server running"));
