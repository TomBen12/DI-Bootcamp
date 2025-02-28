const radiusInput = document.querySelector("#radius");
const volumeInput = document.querySelector("#volume");
const myForm = document.querySelector("form");

function volumeOfSphereOnSubmit(e) {
  e.preventDefault();
  let radius = parseFloat(radiusInput.value);
  let volume = (4 / 3) * Math.PI * radius ** 3;
  volumeInput.value = volume;
}

myForm.addEventListener("submit", volumeOfSphereOnSubmit);
