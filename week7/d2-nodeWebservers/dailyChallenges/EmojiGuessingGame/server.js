const express = require("express");
const cors = require("cors")

const app = express();

const PORT = 5001;

app.use(express.json());
app.use(cors());    

app.listen(PORT, () => {
  console.log("server running on port" + PORT);
});

const emojis = [
  { emoji: "🎉", name: "Party Popper" },
  { emoji: "🚀", name: "Rocket" },
  { emoji: "🐉", name: "Dragon" },
  { emoji: "🍩", name: "Doughnut" },
  { emoji: "🏝️", name: "Desert Island" },
  { emoji: "⚡", name: "Lightning Bolt" },
  { emoji: "🤖", name: "Robot" },
  { emoji: "🎩", name: "Top Hat" },
  { emoji: "💀", name: "Skull" },
  { emoji: "🌈", name: "Rainbow" },
  { emoji: "🦄", name: "Unicorn" },
  { emoji: "🔥", name: "Fire" },
  { emoji: "🍕", name: "Pizza" },
  { emoji: "🐙", name: "Octopus" },
  { emoji: "🎸", name: "Guitar" },
  { emoji: "🕹️", name: "Joystick" },
  { emoji: "⚽", name: "Soccer Ball" },
  { emoji: "🎭", name: "Theater Masks" },
  { emoji: "🧩", name: "Puzzle Piece" },
  { emoji: "🔮", name: "Crystal Ball" },
  { emoji: "📀", name: "CD/DVD" },
  { emoji: "🥑", name: "Avocado" },
  { emoji: "🎰", name: "Slot Machine" },
  { emoji: "🧸", name: "Teddy Bear" },
  { emoji: "🌶️", name: "Chili Pepper" },
  { emoji: "👽", name: "Alien" },
  { emoji: "🥋", name: "Martial Arts Uniform" },
  { emoji: "🎻", name: "Violin" },
  { emoji: "🚲", name: "Bicycle" },
  { emoji: "🦜", name: "Parrot" },
];

const getRandomQuestion = () => {
  const correctEmoji = emojis[Math.floor(Math.random() * emojis.length)];

  let distractors = emojis.filter((e) => e.name !== correctEmoji.name);
  distractors = distractors.sort(() => Math.random() - 0.5).slice(0, 3);

  const options = [...distractors, correctEmoji].sort(
    () => Math.random() - 0.5
  );

  return {
    question: `What emoji is "${correctEmoji.emoji}"?`,
    correctAnswer: correctEmoji.name,
    options: options.map((o) => o.name),
  };
};

app.get("/api/question", (req, res) => {
  res.json(getRandomQuestion());
});

app.post("/api/answer", (req, res) => {
  const { guess, correctAnswer } = req.body;
  const isCorrect = guess === correctAnswer;
  res.json({
    correct: isCorrect,
    message: isCorrect ? "Correct!" : "Wrong!",
  });
});


