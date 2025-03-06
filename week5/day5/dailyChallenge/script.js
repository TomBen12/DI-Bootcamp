const myForm = document.getElementById("myForm");
myForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const firstName = document.getElementById("fname").value;
  const lastName = document.getElementById("lname").value;
  const myObj = { firstName, lastName };
  const myJson = JSON.stringify(myObj);
  const myP = document.createElement("p");
  myP.innerText = myJson;
  document.body.appendChild(myP);
});


