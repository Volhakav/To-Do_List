import { addTask, initTasks } from './tasks.js';

const btnAdd = document.getElementById('btnAdd');
const taskName = document.getElementById('fname');

btnAdd.addEventListener('click', (e) => {
    e.preventDefault(); 
    const taskText = taskName.value.trim();

    if (taskText === '') {
        alert('Write task name!');
        return;
    }

    addTask(taskText);
    taskName.value = '';
});

initTasks();
