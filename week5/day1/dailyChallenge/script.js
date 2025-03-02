const myForm = document.forms[0];
const submitBtn = myForm.getElementsByTagName("button")[0];
const myInput = document.getElementsByTagName("input")[0];
const listTasks = document.getElementsByClassName("listTasks")[0];
const tasks = [];

function addTask() {
  if (!myInput.value.trim()) {
    alert("Input is empty!");
    return;
  }
  const taskValue = myInput.value.trim();
  tasks.push(taskValue);
  let newTask = document.createElement("p");
  let text = document.createTextNode(taskValue);
  newTask.appendChild(text);
  listTasks.appendChild(newTask);
  myInput.value = "";
}

submitBtn.addEventListener("click", addTask);
