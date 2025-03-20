import { error } from "console";
import { triviaQuestions } from "../config/data.js";

let cuurentQuestionIndex = 0;
let userScore = 0;

export const getCurrentQuestion = (req, res) => {
  if (cuurentQuestionIndex < triviaQuestions.length) {
    const question = triviaQuestions[cuurentQuestionIndex].question;
    res.json({ question });
  } else {
    res.json({ message: "Quiz completed!" });
  }
};

export const submitAnswer = (req, res) => {
  const { answer } = req.body;
  const currentQuestion = triviaQuestions[cuurentQuestionIndex];

  if (!currentQuestion) {
    res.status(400).json({ error: `No more questions` });
  }

  cuurentQuestionIndex++;

  if (answer.toLowerCase() !== currentQuestion.answer.toLowerCase()) {
    res.status(400).json({ error: `Wrong Answer` });
    return;
  }

  userScore++;

  res.status(200).json({ message: `Good Answer` });
};

export const getScore = (req, res) => {
//   console.log(req);
//   console.log(res.locals.userid);
  res.json({ message: "the score is " + userScore });
};
