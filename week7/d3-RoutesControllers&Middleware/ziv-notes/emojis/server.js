import express from "express";
import { emojis } from "./data/emojis.js";
import cors from "cors";
import {
  getRandomNumber,
  getRandomElementFromArray,
  generateOption,
  shuffeArray,
} from "./utils/utils.js";
import path from "path";

const app = express();

const PORT = process.env.PORT || 5000;

/**
 * body parser
 */
app.use(express.json());
app.use(cors())

const __dirname = path.resolve();

app.use("/", express.static(__dirname + "/public"));

app.listen(PORT, () => {
  console.log(`run on ${PORT}`);
});

app.get("/play", (req, res) => {
  // const randomIndx = getRandomNumber(emojis)
  const randomEmoji = getRandomElementFromArray(emojis);

  const guesingOtiond = generateOption(randomEmoji.name, emojis);

  const shuffelddArray = shuffeArray(guesingOtiond);

  res.json({ randomEmoji, guesingOtiond: shuffelddArray });
});
