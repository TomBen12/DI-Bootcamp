const knex = require("knex");

// # Do not expose your Neon credentials to the browser

const PGHOST = "ep-winter-shape-a2rbuxds-pooler.eu-central-1.aws.neon.tech";
const PGDATABASE = "neondb";
const PGUSER = "neondb_owner";
const PGPASSWORD = "pLy9bH0NeVmh";
const PGPORT = 5432;

const db = knex({
  client: "pg",
  connection: {
    host: PGHOST,
    port: PGPORT,
    user: PGUSER,
    database: PGDATABASE,
    password: PGPASSWORD,
    ssl: { rejectUnauthorized: false }, // cloud hosted db requires ssl
  },
});

async function getVersion() {
  try {
    const result = await db.raw("select version()");
    console.log(result.rows);
  } catch (error) {
    console.log(error);
  }
}
// getVersion()

// db.raw("select id, name, price from products where id = ?", [23])
//   .then((data) => {
//     console.log(data.rows);
//   })
//   .catch((e) => {
//     console.log(e);
//   });

// db("products")
//   //   .where( "id", 23 )
//   .select("id", "name", "price")
//   .orderBy("name")
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((e) => {
//     console.log(e);
//   });

/** insert */
// db("products")
//   .insert([
//     { name: "prod 4", price: "444" },
//     { name: "prod 5", price: "555" },
//   ])
//   .returning(['id','price'])
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((e) => {
//     console.log(e);
//   });

/** update */
// db("products")
//   .where({ id: 27 })
//   .update({ name: "iphone15" }, ["id", "name", "price"])

//   .then((data) => {
//     console.log(data);
//   })
//   .catch((e) => {
//     console.log(e);
//   });

/** delete */
// db("products")
//   .where({ id: 27 })
//   .del()
//   .returning()
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((e) => {
//     console.log(e);
//   });

const test = async () => {
  const trx = await db.transaction();
  try {
    const [prod] = await db("products")
      .insert(
        {
          name: "abc",
          price: 555,
        },
        ["id"]
      )
      .transacting(trx);

    await db("products")
      .insert(
        {
          name: "cde",
          price: 777,
        },
        ["id"]
      )
      .transacting(trx);

    await trx.commit();
    // await trx.rollback();
  } catch (error) {
    console.log(error);
    await trx.rollback();
  }
};
test();
