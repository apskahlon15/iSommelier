// db.js
const { Pool } = require("pg");

// Create a PostgreSQL connection pool
const pool = new Pool({
  user: "postgres", // Replace with your PostgreSQL user
  host: "localhost", // Replace if your DB is hosted elsewhere
  database: "user_info", // Replace with your database name
  password: "password", // Replace with your PostgreSQL password
  port: 5432, // Default PostgreSQL port
});

module.exports = pool;
