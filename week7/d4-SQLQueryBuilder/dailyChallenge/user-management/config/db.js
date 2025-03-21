import knex from "knex";
import "dotenv/config";

const db = knex({
  client: "pg",
  connection: {
    host: process.env.PG_HOST,
    user: process.env.PG_USER,
    password: process.env.PG_PASS,
    database: process.env.PG_NAME,
    ssl: { rejectUnauthorized: false },
  },
});

db.raw("SELECT 1")
  .then(() => console.log("database Connected"))
  .catch((err) => {
    console.error("database connection error:", err);
    process.exit(1);
  });

export default db;
