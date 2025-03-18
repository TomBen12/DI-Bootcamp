const API_URL = "http://localhost:5001";

async function loadQuestion() {
  const response = await fetch(`${API_URL}/api/question`);
  const data = await response.json();

  document.getElementById("question").innerText = "Which emoji is this?";
  document.getElementById("emoji").innerText = data.question.split('"')[1];
  document.getElementById("feedback").innerText = "";

  const optionsContainer = document.getElementById("options");
  optionsContainer.innerHTML = "";

  data.options.forEach((option) => {
    const button = document.createElement("button");
    button.innerText = option;
    button.onclick = () => submitAnswer(option, data.correctAnswer);
    optionsContainer.appendChild(button);
  });
}

async function submitAnswer(guess, correctAnswer) {
  const response = await fetch(`${API_URL}/api/answer`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ guess, correctAnswer }),
  });

  const result = await response.json();
  document.getElementById("feedback").innerText = result.message;

  setTimeout(loadQuestion, 1000);
}

loadQuestion();