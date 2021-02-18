const { Pool } = require("pg");

const db = new Pool({
  user: "44788",
  host: "localhost",
  database: "golden_shoe",
  password: "*****",
  port: 5432,
});

module.exports = db;
