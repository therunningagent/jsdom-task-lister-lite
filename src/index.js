document.addEventListener("DOMContentLoaded", () => {
  // your code here

  const taskButton = document.querySelector("#create-task-form")
  const newTaskDescription = document.getElementById("new-task-description");
  const newTaskPriority = document.getElementById("new-task-priority")

  
  
  const createNewTask = event => {
    event.preventDefault();

    const newTaskDescription = document.getElementById("new-task-description");
    const newTask = document.createElement("li");
    newTask.innerText = newTaskDescription.value; 

    appendNewTask(newTask);
    event.target.reset();

    console.log(newTask)
  }

  taskButton.addEventListener("submit", createNewTask)

  const appendNewTask = task => {
    document.getElementById("tasks").appendChild(task);
  }


});
