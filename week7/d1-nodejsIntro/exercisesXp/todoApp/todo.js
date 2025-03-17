export class TodoList {
  constructor() {
    this.tasks = [];
  }
  addTask(name) {
    this.tasks.push({ name, completed: false });
  }

  completeTask(taskName) {
    let task = this.tasks.find((task) => task.name === taskName);
    task.completed = true;
  }

  getAllTasks() {
    return this.tasks;
  }
}
