function addTask() {
  const taskInput = document.getElementById('task');
  const taskText = taskInput.value.trim();

  if (taskText !== '') {
    const taskList = document.getElementById('taskList');
    const li = document.createElement('li');
    li.innerHTML = `
            <span>${taskText}</span>
            <button class="edit" onclick="editTask(this)">Edit</button>
            <button class="delete" onclick="deleteTask(this)">Delete</button>
        `;
    taskList.appendChild(li);
    taskInput.value = '';
  }
}

function editTask(editButton) {
  const newTaskText = prompt('Edit tugas:', editButton.previousElementSibling.textContent);
  if (newTaskText !== null) {
    editButton.previousElementSibling.textContent = newTaskText;
  }
}

function deleteTask(deleteButton) {
  const taskList = document.getElementById('taskList');
  taskList.removeChild(deleteButton.parentElement);
}
