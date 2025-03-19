const questions = [
  {
    id: 1,
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
    answer: "Paris",
  },
  {
    id: 2,
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Venus"],
    answer: "Mars",
  },
  {
    id: 3,
    question: "Who wrote 'To Kill a Mockingbird'?",
    options: ["J.K. Rowling", "Harper Lee", "Ernest Hemingway", "Mark Twain"],
    answer: "Harper Lee",
  },
  {
    id: 4,
    question: "What is the largest ocean on Earth?",
    options: [
      "Atlantic Ocean",
      "Indian Ocean",
      "Arctic Ocean",
      "Pacific Ocean",
    ],
    answer: "Pacific Ocean",
  },
  {
    id: 5,
    question: "How many continents are there on Earth?",
    options: ["5", "6", "7", "8"],
    answer: "7",
  },
];

const playerScore = { score: 0, currentQIndex: 0 };

export { questions, playerScore };
