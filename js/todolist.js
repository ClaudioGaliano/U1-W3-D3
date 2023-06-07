
let taskForm = document.getElementById('new-task')

taskForm.addEventListener('submit', function (e) {
  e.preventDefault()

  const taskInputField = document.getElementById('task')

  const retrievedTask = taskInputField.value

  const newTask = {
    name: retrievedTask,
  }

  console.log('TASK INSERITA', newTask)

  let newTaskSlot = document.createElement('div')

  newTaskSlot.classList.add('task-card')

  newTaskSlot.innerHTML = `
    <p>${retrievedTask}</p>
    <button id=completeButton>COMPLETATA</button>
    <button id=deleteButton>ELIMINA</button>
  `

  const savedTasksDiv = document.getElementById('saved-tasks')
  savedTasksDiv.appendChild(newTaskSlot)

  const allTheDeleteButtons = document.querySelectorAll('#deleteButton')

  allTheDeleteButtons.forEach((button) => {
    button.addEventListener('click', function (e) {
      let buttonIJustClicked = e.target
      let TaskToRemove = buttonIJustClicked.parentElement
      TaskToRemove.remove()
      console.log('TASK ELIMINATA', newTask);
    })
  })
  const allTheCompleteButtons = document.querySelectorAll('#completeButton')
  allTheCompleteButtons.forEach((button) => {
    button.addEventListener('click', function (e) {
    let markedTask = document.getElementsByTagName('p') [0]
    markedTask.classList.toggle('taskcompleted')
    console.log('TASK COMPLETATA', newTask);
    })
  })
  taskInputField.value = ''
})
