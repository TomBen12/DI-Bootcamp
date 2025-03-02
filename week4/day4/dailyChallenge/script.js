const myForm = getForm();
myForm.addEventListener("submit", handleSubmit);

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
