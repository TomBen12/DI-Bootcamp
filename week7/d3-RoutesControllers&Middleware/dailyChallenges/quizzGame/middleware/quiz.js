import { questions, playerScore } from "../config/data.js";

const validateAnswer = (req, res, next) => {
  const currentQuestion = questions[playerScore.currentQIndex];
  const { answer } = req.body;

  if (!currentQuestion) {
    return res.json({
      message: "The quiz has ended. Use /quiz/score",
    });
  }

  if (!answer) {
    return res.status(400).json({ message: "No answer provided..." });
  }

  if (answer === currentQuestion.answer) {
    playerScore.score++;
    res.locals = {
      message: "Correct!",
    };
  } else {
    res.locals = {
      message: `Wrong!".`,
    };
  }

  playerScore.currentQIndex++;
  next();
};

export { validateAnswer };
