const { Pool } = require("pg");

let pool;
let db;

if (process.env.DATABASE_URL) {
  const connectionString = process.env.DATABASE_URL;
  db = {
    connectionString: connectionString,
    sslmode: require,
    ssl: {
      rejectUnauthorized: false,
    },
  };
} else {
  db = {
    user: "44788",
    host: "localhost",
    database: "golden_shoe",
    password: "*****",
    port: 5432,
  };
}

pool = new Pool(db);

module.exports = pool;
