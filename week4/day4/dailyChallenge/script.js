const myForm = getForm();
myForm.addEventListener("submit", handleSubmit);

// Write a story that uses each of the values.
// Make sure you check the console for errors when playing the game.
// Bonus: Add a “shuffle” button to the HTML file, when clicked the button should change the story currently displayed (but keep the values entered by the user). The user could click the button at least three times and get a new story. Display the stories randomly.

function getForm() {
  return document.getElementById("libform");
}

function handleSubmit(e) {
  e.preventDefault();
  const noun = document.getElementById("noun");
  const adjective = document.getElementById("adjective");
  const person = document.getElementById("person");
  const verb = document.getElementById("verb");
  const place = document.getElementById("place");

  if (
    !noun.value ||
    !adjective.value ||
    !person.value ||
    !verb.value ||
    !place.value
  ) {
    return;
  }
  const myStory = writeStory(noun, adjective, person, verb, place);
  return alert(myStory);
}

function writeStory(noun, adjective, person, verb, place) {
  return `I hate ${noun.value}s ... Especially when they are ${adjective.value}. I'm a fan of ${person.value} even more when they ${verb.value} at ${place.value}`;
}
