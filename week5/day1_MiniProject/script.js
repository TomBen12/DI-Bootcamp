let currentColor = "#000000";
let isDrawing = false;

const canvas = document.getElementById("canvas");
const predefinedColorContainer = document.getElementById("predefined-colors");
const clearButton = document.getElementById("clear-canvas");

const colorPalette = [
  "#FF5733",
  "#FFBD33",
  "#33FF57",
  "#33A1FF",
  "#8D33FF",
  "#FF33A1",
  "#FF8C33",
  "#33FFD5",
  "#A6FF33",
  "#3366FF",
  "#B833FF",
  "#FF3333",
  "#FFD700",
  "#708090",
  "#FFFFFF",
  "#000000",
];

for (let i = 0; i < colorPalette.length; i++) {
  const colorElement = document.createElement("div");
  colorElement.style.backgroundColor = colorPalette[i];
  colorElement.classList.add("color");
  colorElement.setAttribute("data-color", colorPalette[i]);
  predefinedColorContainer.appendChild(colorElement);
}

predefinedColorContainer.addEventListener("click", function (event) {
  if (event.target.classList == "color") {
    currentColor = event.target.getAttribute("data-color");
  }
});

for (let i = 0; i < 2000; i++) {
  let pixel = document.createElement("div");
  pixel.classList.add("pixel");
  canvas.appendChild(pixel);
}

canvas.addEventListener("mousedown", () => (isDrawing = true));
canvas.addEventListener("mouseup", () => (isDrawing = false));
canvas.addEventListener("mouseleave", () => (isDrawing = false));

canvas.addEventListener("mousemove", function (event) {
  if (isDrawing && event.target.classList.contains("pixel")) {
    event.target.style.backgroundColor = currentColor;
  }
});

clearButton.addEventListener("click", function () {
  document.querySelectorAll(".pixel").forEach((pixel) => {
    pixel.style.backgroundColor = "white";
  });
  console.log("Canvas cleared!");
});
