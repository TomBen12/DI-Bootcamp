import { Router } from "express";
import {
  startQuiz,
  sendQuizResponse,
  displayScore,
} from "../controllers/quiz.js";
import { validateAnswer } from "../middleware/quiz.js";

const router = Router();

router.get("/", startQuiz);

router.post("/", validateAnswer, sendQuizResponse);

router.get("/score", displayScore);

export default router;
