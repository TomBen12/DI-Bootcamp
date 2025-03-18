async function getEmojisToPlay() {
  try {
    const res = await fetch("http://localhost:5000/play");
    const data = await res.json();
    console.log(data);
    render(data.randomEmoji, data.guesingOtiond);
  } catch (error) {
    console.log(error);
  }
}
getEmojisToPlay();

function render(emoji, options) {
  const root = document.getElementById("root");
  console.log(emoji);
  console.log(options);

  const html = options.map((item) => {
    return `${item}, `;
  });

  root.innerHTML = "Options: " + html.join() + "Hint: " + emoji.emoji;
}
