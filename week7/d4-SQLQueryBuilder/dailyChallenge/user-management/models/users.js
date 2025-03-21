import db from "../config/db.js";
//select a user By username
const findUserByUsername = async (username) => {
  const [result] = await db("users").select("username").where({ username });
  return result?.username;
};
//insrert to users tale
//it will use db by default if trx is not passed to my function
const insertToUsers = async (username, trx = db) => {
  return trx("users").insert({ username });
};
//insert to hashpasswords table
const insertToPasswords = async (username, hashedPassword, trx = db) => {
  return trx("hashpwd").insert({ username, password: hashedPassword });
};

//retrieve hash password from hshpass by username
const findHashPassByUserName = async (username) => {
  const [result] = await db("hashpwd").select("password").where({ username });
  return result?.password;
};

const retrieveAllUsers = async () => {
  return db("users").select(
    "id",
    "email",
    "username",
    "first_name",
    "last_name"
  );
};

const retrieveUserById = async (id) => {
  const [result] = await db("users")
    .select("id", "email", "username", "first_name", "last_name")
    .where({ id });
  return result;
};

const updateUserByID = async (id, fieldsToUpdate) => {
  const [result] = await db("users")
    .where({ id })
    .update(fieldsToUpdate)
    .returning(["id", "username", "email", "first_name", "last_name"]);
  return result;
};
export {
  insertToUsers,
  insertToPasswords,
  findUserByUsername,
  findHashPassByUserName,
  retrieveAllUsers,
  retrieveUserById,
  updateUserByID,
};
