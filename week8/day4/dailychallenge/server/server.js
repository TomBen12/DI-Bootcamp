import express from "express";
import cors from "cors";
import { Router } from "express";

const app = express();

const router = Router();

app.use(express.json());

app.use(cors());

app.use("/api", router);

router.get("/hello", (req, res) => {
  res.status(200).json({ message: "Moshi moshi from express" });
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`server run on port http://localhost:${PORT}/api`);
});
