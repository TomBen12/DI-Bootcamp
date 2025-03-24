import cors from "cors";
import express from "express";
import umRouter from "./routes/users.js";
import { fileURLToPath } from "url";
import path from "path";
import "dotenv/config";

const app = express();

const PORT = process.env.LOCALPORT;

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

app.use(cors());

app.use("/", express.static(path.join(__dirname, "public")));

app.use(express.json());

app.use("/umapi", umRouter);

app.listen(PORT, () => {
  console.log(`server running on port: ${PORT}`);
});
