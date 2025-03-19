import express from "express";
import quizzrouter from "./routes/quiz.js";

const app = express();

app.use(express.json());

app.use("/quizzapi", quizzrouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`quizz app listening on port ${PORT}`);
});
