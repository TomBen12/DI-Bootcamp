const getGif = async () => {
  const apiKey = "hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";
  try {
    const result = await fetch(
      `https://api.giphy.com/v1/gifs/random?tag=${tag}&api_key=${apiKey}`
    );
    if (!result.ok) {
      throw new Error(`${result.status} : ${result.statusText}`);
    }
    const data = await result.json();
    const gifUrl = data.data.images.original.url;
    console.log(data);
    return gifUrl;
  } catch (error) {
    console.log("Error caught : ", error.message);
  }
};

function createGifElement(gifUrl) {
  const gifElement = document.createElement("div");
  gifElement.classList.add("gif-element");
  const gif = document.createElement("img");
  gif.src = gifUrl;
  const deleteButton = document.createElement("button");
  deleteButton.classList.add("delete-button");
  deleteButton.textContent = "Delete!";
  deleteButton.addEventListener("click", (e) => gifElement.remove());
  gifElement.append(gif, deleteButton);
  document.getElementById("gif-container").appendChild(gifElement);
}

async function addGif(e) {
  e.preventDefault();
  let gifCategory = document.getElementById("gif-category").value;
  let gifUrl = await getGif(gifCategory);
  if (gifUrl) {
    createGifElement(gifUrl);
  }
}

const theForm = document.getElementsByTagName("form")[0];

theForm.addEventListener("submit", addGif);
document.getElementById("get-button").addEventListener("click", addGif);

const gifContainer = document.getElementById("gif-container");
const deleteAllGifs = document.createElement("button");
deleteAllGifs.textContent = "Delete All!";
deleteAllGifs.classList.add("delete-all");

theForm.appendChild(deleteAllGifs);

deleteAllGifs.addEventListener("click", (e) => {
  e.preventDefault();
  while (gifContainer.firstChild) {
    gifContainer.removeChild(gifContainer.firstChild);
  }
});
