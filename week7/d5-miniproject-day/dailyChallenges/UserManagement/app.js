import express from "express";
import "dotenv/config";

const app = express();

const PORT = process.env.LOCALPORT;

app.use(express.json());

app.listen(PORT, () => {
  console.log(`server running on port: ${PORT}`);
});
