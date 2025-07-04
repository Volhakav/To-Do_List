let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
const taskList = document.getElementById('taskList');
const taskName = document.getElementById('fname');
const buttonAdd = document.querySelector('#btnAdd');

function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function renderTask(task, index) {
    const li = document.createElement('li');

    const taskLeft = document.createElement('div');
    taskLeft.className = 'task-left';

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'myCheckBox';
    checkbox.checked = task.completed;

    const span = document.createElement('span');
    span.textContent = task.text;
    if(task.completed){
        li.classList.add('completed'); // creates CSS class 'completed'
    }

    taskLeft.appendChild(checkbox); // adds element 
    taskLeft.appendChild(span);

    const deleteButton = document.createElement('button');
    deleteButton.className = 'deleteButton';
    deleteButton.textContent = 'Delete';

    li.appendChild(taskLeft);
    li.appendChild(deleteButton);
    taskList.appendChild(li);

    checkbox.addEventListener('change', () => {
        task.completed = checkbox.checked;
        li.classList.toggle('completed');
        saveTasks();
    });

    deleteButton.addEventListener('click', () => {
        tasks.splice(index, 1);  //removes one task from the tasks array at the given index
        saveTasks();
        refreshTasks();
    });
}

// goes through every task in tasks array and calls the renderTask() function on it
function refreshTasks() {  
    taskList.innerHTML = '';
    tasks.forEach((task, index) => {
        renderTask(task, index);
    });
}
    
btnAdd.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent form reload
    const taskText = taskName.value.trim(); // .trim() removes spaces
    if (taskText === '') {
        alert('Write task name!');
        return;
    }

    const newTask = {
        text: taskText,
        completed: false
    };

    tasks.push(newTask);
    saveTasks();
    refreshTasks();

    taskName.value = ''; // Clear input
});

refreshTasks();