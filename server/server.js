const express = require("express");
const cors = require("cors");
const { Pool } = require("pg");

// PostgreSQL connection setup
const pool = new Pool({
  user: "your_db_user",
  host: "localhost",
  database: "your_db_name",
  password: "your_db_password",
  port: 5432,
});

const app = express();

app.use(express.json());
app.use(cors());

app.post("/signup", async (req, res) => {
  const { name, email } = req.body;

  const insertSTMT = `INSERT INTO user_data (user_name, user_email) VALUES ($1, $2) RETURNING *`;

  try {
    const result = await pool.query(insertSTMT, [name, email]);
    res
      .status(201)
      .json({ message: "User added successfully", user: result.rows[0] });
  } catch (err) {
    console.error("Error saving data:", err);
    res.status(500).json({ message: "Server error" });
  }
});

app.listen(3000, () => console.log("Server running on http://localhost:3000"));
