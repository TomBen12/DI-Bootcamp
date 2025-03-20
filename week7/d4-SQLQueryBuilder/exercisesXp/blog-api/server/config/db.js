const knex = require("knex");
require("dotenv").config();

const db = knex({
  client: "pg",
  connection: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
  },
});
//testing my db connection
db.raw("SELECT 1")
  .then(() => console.log("database Connected"))
  .catch((err) => {
    console.error("database connection error:", err);
    process.exit(1);
  });

module.exports = db;
