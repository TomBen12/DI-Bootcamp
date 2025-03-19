import { questions, playerScore } from "../config/data.js";

const startQuiz = (req, res) => {
  playerScore.score = 0;
  playerScore.currentQIndex = 0;
  const currentQuestion = questions[playerScore.currentQIndex];
  res.json({
    message: "Quiz Start!",
    question: currentQuestion.question,
  });
};

const sendQuizResponse = (req, res) => {
  if (playerScore.currentQIndex < questions.length) {
    res.json({
      ...res.locals.feedback,
      nextQuestion: questions[playerScore.currentQIndex].question,
    });
  } else {
    res.json({
      ...res.locals.feedback,
      message: "Quiz completed! Check your score at /quizzapi/score",
    });
  }
};

const displayScore = (req, res) => {
  res.json({
    message: "Your current score",
    score: playerScore.score,
  });
};

export { startQuiz, sendQuizResponse, displayScore };
