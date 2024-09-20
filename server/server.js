// server.js
const express = require("express");
const cors = require("cors");
const pool = require("./db"); // Import the pool from db.js

const app = express();

// Middleware
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000", // Adjust if your frontend is hosted elsewhere
  })
);

// POST /signup route
app.post("/signup", async (req, res) => {
  const { name, email } = req.body;

  // Basic validation
  if (!name || !email) {
    return res.status(400).json({ message: "Name and email are required." });
  }

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

// Start the server on port 5000
const PORT = 3000;
app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
