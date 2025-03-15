// Dom Extraction
const characterContainer = document.getElementById("character-container");
const nameP = document.getElementById("name");
const heightP = document.getElementById("height");
const genderP = document.getElementById("gender");
const birthYearP = document.getElementById("birth-year");
const homeWorldP = document.getElementById("home-world");
const charBtn = document.getElementById("char-btn");
const loadingSpinner = document.getElementById("spinner");

// Utility functions

const getRandomSWCharaData = async () => {
  const url = "https://www.swapi.tech/api/people/";
  //+1 or else radom will be from 0 to 82 because of floor()
  const charaNum = Math.floor(Math.random() * 83) + 1;
  try {
    loadingStart();
    const response = await fetch(`${url}${charaNum}`);

    if (!response.ok) {
      throw Error(
        `Status: ${response.status} Status Text ${response.statusText}`
      );
    }
    const data = await response.json();
    return await filterReleventData(data);
  } catch (error) {
    console.log(error.message);
  } finally {
    loadingStop();
  }
};
///homeworld is in another url ...... so it gets its own function...
async function homeWorldPlanet(homeworldUrl) {
  try {
    const homePlanetResponse = await fetch(homeworldUrl);
    if (!homePlanetResponse.ok) {
      throw Error(
        `Status: ${homePlanetResponse.status} Status Text ${homePlanetResponse.statusText}`
      );
    }
    const homeData = await homePlanetResponse.json();
    const {
      result: {
        properties: { name },
      },
    } = homeData;
    return name;
  } catch (error) {
    console.log(error.message);
  }
}

async function filterReleventData(data) {
  const {
    result: { properties },
  } = data;
  const { name, height, gender, birth_year, homeworld } = properties;
  const homeplanet = await homeWorldPlanet(homeworld);
  const relevantData = { name, height, gender, birth_year, homeplanet };
  return relevantData;
}
//loadings functions
function loadingStart() {
  loadingSpinner.style.display = "block";
  nameP.textContent = "";
  heightP.textContent = "";
  genderP.textContent = "";
  birthYearP.textContent = "";
  homeWorldP.textContent = "";
}
function loadingStop() {
  loadingSpinner.style.display = "none";
}

//Dom manipulation

charBtn.addEventListener("click", async (e) => {
  const relevantData = await getRandomSWCharaData();
  nameP.textContent = `Name - ${relevantData.name}`;
  heightP.textContent = `Height - ${relevantData.height}cm`;
  genderP.textContent = `Gender - ${relevantData.gender}`;
  birthYearP.textContent = `Birth Year - ${relevantData.birth_year}`;
  homeWorldP.textContent = `Home World - ${relevantData.homeplanet}`;
});
