document.addEventListener("DOMContentLoaded", () => {
  // your code here


});

const form = document.querySelector('#create-task-form')
const taskDescription = document.querySelector('#new-task-description')
const list = document.querySelector('#tasks')
const br = document.createElement('br')

form.addEventListener('submit', function (event) {
  event.preventDefault()
  const newTask = taskDescription.value
  renderNewTask(newTask)
  event.target.reset()
})

function renderNewTask(newTask) {
  const li = document.createElement('li')
  const deleteButton = document.createElement('button')
  const editButton = document.createElement('button')

  editButton.textContent = 'EDIT'
  editButton.dataset.name = newTask

  deleteButton.textContent = 'DELETE'
  deleteButton.dataset.name = newTask

  li.textContent = newTask;
  list.append(li)
  li.append(editButton, deleteButton)

  deleteItem(deleteButton, li)
  editItem(editButton, li)
}



function deleteItem(deleteButton, item) {

  deleteButton.addEventListener('click', function () {
    item.remove();
  });
}

function editItem(editButton, item) {
  editButton.addEventListener('click', function () {
    console.log('edit button clicked')
  })
}
