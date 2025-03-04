const drumkit = [
  { key: "A", sound: "Boom", audio: "sounds/boom.wav" },
  { key: "S", sound: "Clap", audio: "sounds/clap.wav" },
  { key: "D", sound: "HiHat", audio: "sounds/hihat.wav" },
  { key: "F", sound: "Kick", audio: "sounds/kick.wav" },
  { key: "G", sound: "OpenHat", audio: "sounds/openhat.wav" },
  { key: "H", sound: "Ride", audio: "sounds/ride.wav" },
  { key: "J", sound: "Snare", audio: "sounds/snare.wav" },
  { key: "K", sound: "Tink", audio: "sounds/tink.wav" },
  { key: "L", sound: "Tom", audio: "sounds/tom.wav" },
];

function createDrums() {
  const drumsetContainer = document.getElementById("drumset-container");

  for (let i = 0; i < drumkit.length; i++) {
    const drumBtn = document.createElement("div");
    const ky = document.createElement("p");
    const note = document.createElement("p");
    drumBtn.classList = "drum-btns";
    ky.classList = "key";
    note.classList = "note";
    ky.textContent = drumkit[i].key;
    note.textContent = drumkit[i].sound;
    drumBtn.append(ky, note);
    drumsetContainer.appendChild(drumBtn);
    document.addEventListener("keydown", (e) => {
      if (e.key == drumkit[i].key || e.key == drumkit[i].key.toLowerCase()) {
        drumBtn.classList.toggle("active");
        const audio = new Audio(drumkit[i].audio);
        audio.play();
        setTimeout(() => drumBtn.classList.toggle("active"), 200);
      }
    });
    drumBtn.addEventListener("click", () => {
      drumBtn.classList.add("active");
      const audio = new Audio(drumkit[i].audio);
      audio.play();
      setTimeout(() => drumBtn.classList.remove("active"), 200);
    });
  }
}
createDrums();
