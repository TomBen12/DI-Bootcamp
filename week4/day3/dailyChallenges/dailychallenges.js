const planets = [
  "Mercury",
  "Venus",
  "Earth",
  "Mars",
  "Jupiter",
  "Saturn",
  "Uranus",
  "Neptune",
];

const planetColors = {
  Mercury: "gray",
  Venus: "yellow",
  Earth: "blue",
  Mars: "red",
  Jupiter: "orange",
  Saturn: "golden",
  Uranus: "lightblue",
  Neptune: "darkblue",
};

for (let i = 0; i < planets.length; i++) {
  let planetName = planets[i];
  let planetDiv = document.createElement("div");
  let moonDiv = document.createElement("div");
  let mySection = document.querySelector("section");
  planetDiv.className = "planet";
  moonDiv.className = "moon";
  planetDiv.style.backgroundColor = planetColors[planetName];
  moonDiv.style.backgroundColor = "white";
  moonDiv.style.zIndex = "1";
  moonDiv.style.position = "relative";
  moonDiv.style.left = `${i * 10}px`;
  moonDiv.style.top = "10px";
  mySection.style.display = "flex";
  mySection.style.flexWrap = "wrap";
  planetDiv.style.margin = "5em";
  mySection.appendChild(planetDiv);
  planetDiv.appendChild(moonDiv);
}
