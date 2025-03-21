import express from "express";
import userRoute from "./routes/users.js";
import "dotenv/config";

const app = express();

const PORT = process.env.LOCALPORT;

app.use(express.json());

app.use("/userinterface", userRoute);

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
