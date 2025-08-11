import { loadTasks, saveTasks } from './storage.js';
import { createTaskElement } from './dom.js';

let tasks = loadTasks();
const taskList = document.getElementById('taskList');

function refreshTasks() {
    taskList.innerHTML = '';
    tasks.forEach((task, index) => {
        const li = createTaskElement(task, index, { 
            onToggle: toggleTask, 
            onDelete: deleteTask 
        });
        taskList.appendChild(li);
    });
}

function toggleTask(index) {
    tasks[index].completed = !tasks[index].completed;
    updateTasks();
}

function deleteTask(index) {
    tasks.splice(index, 1);
    updateTasks();
}

export function addTask(text) {
    tasks.push({ text, completed: false });
    updateTasks();
}

function updateTasks() {
    saveTasks(tasks);
    refreshTasks();
}

export function initTasks() {
    refreshTasks();
}
