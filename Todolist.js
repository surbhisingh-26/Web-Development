const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

addTaskBtn.addEventListener('click', () => {
  const taskText = taskInput.value.trim();
  if (taskText !== '') {
    const taskItem = document.createElement('li');
    taskItem.textContent = taskText;

    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.addEventListener('click', () => taskItem.remove());

    taskItem.addEventListener('click', () => taskItem.classList.toggle('completed'));

    taskItem.appendChild(removeBtn);
    taskList.appendChild(taskItem);
    taskInput.value = '';
  }
});
