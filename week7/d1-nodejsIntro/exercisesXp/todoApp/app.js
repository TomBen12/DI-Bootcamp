import { TodoList } from "./todo.js";

const myTodoList = new TodoList();
myTodoList.addTask("Do homeworks");
myTodoList.addTask("Cook diner");
myTodoList.addTask("Do laundry");

myTodoList.completeTask("Do homeworks");
console.log(myTodoList.getAllTasks());
