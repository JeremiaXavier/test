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
  database: "test",
});

db.connect((err) => {
  if (err) throw err;
  console.log("DB Connected");

  const createTable = `
    CREATE TABLE IF NOT EXISTS bookings (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(100),
      bus VARCHAR(50),
      seats INT,
      ac BOOLEAN,
      travel_date DATE,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `;
  db.query(createTable, () => console.log("Bookings table ready"));
});

app.get("/bookings", (req, res) => {
  db.query("SELECT * FROM bookings", (err, result) => {
    
    res.json(result);
  });
});

app.post("/bookings", (req, res) => {
  const { name, bus, seats, ac, date } = req.body;

  db.query(
    "INSERT INTO bookings (name, bus, seats, ac, travel_date) VALUES (?, ?, ?, ?, ?)",
    [name, bus, seats, ac, date],
    () => res.send("Booked")
  );
});

app.delete("/bookings/:id", (req, res) => {
  db.query(
    "DELETE FROM bookings WHERE id = ?",
    [req.params.id],
    () => res.send("Cancelled")
  );
});

app.listen(5000);
