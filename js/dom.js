export function createTaskElement(task, index, { onToggle, onDelete }) {
    const li = document.createElement('li');
    if (task.completed) li.classList.add('completed');

    const taskLeft = document.createElement('div');
    taskLeft.className = 'task-left';

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'myCheckBox';
    checkbox.checked = task.completed;
    checkbox.addEventListener('change', () => onToggle(index));

    const span = document.createElement('span');
    span.textContent = task.text;

    const deleteButton = document.createElement('button');
    deleteButton.className = 'deleteButton';
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => onDelete(index));

    taskLeft.append(checkbox, span);
    li.append(taskLeft, deleteButton);
    return li;
}
