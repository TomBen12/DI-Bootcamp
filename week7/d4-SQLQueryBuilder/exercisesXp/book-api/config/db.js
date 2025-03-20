const dotenv = require("dotenv");
const knex = require("knex");

// dotenv.config({
//   path: "/Users/tom/Documents/DI-Bootcamp/week7/d4-SQLQueryBuilder/exercisesXp/book-api/.env",
// });

dotenv.config();

const db = knex({
  client: "pg",
  connection: {
    connectionString: process.env.NEON_DB_URL,
    ssl: { rejectUnauthorized: false },
  },
});

db.raw("SELECT 1")
  .then(() => console.log("database Connected"))
  .catch((err) => {
    console.error("database connection error:", err);
    process.exit(1);
  });

module.exports = db;
