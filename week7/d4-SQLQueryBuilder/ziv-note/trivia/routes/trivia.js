import { Router } from "express";

import {
  getCurrentQuestion,
  getScore,
  submitAnswer,
} from "../controllers/trivia.js";

const router = Router();

// GET the current question
router.get("/", getCurrentQuestion);
// POST an answer
router.post("/", submitAnswer);
// GET score
router.get("/score", getScore);

export default router;
