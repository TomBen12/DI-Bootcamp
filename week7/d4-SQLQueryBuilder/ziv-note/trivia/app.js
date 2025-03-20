import express from "express";
import quizRouter from "./routes/trivia.js";
import { auth } from "./middlewares/auth.js";

const app = express();
const PORT = 3002;

// body parser
app.use(express.json());
// app.use(express.urlencoded({extended:true}))

app.use(auth())

app.listen(PORT, () => {
  console.log(`server run on port ${PORT}`);
});

app.use("/quiz", quizRouter);
