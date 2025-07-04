document.querySelector('#btnAdd').addEventListener('click', () => {
    const taskList = document.getElementById('taskList');
    const taskName = document.getElementById('fname');

    if (taskName.value.trim() === "") {
        alert('Write task name!');
    } else {
        const li = document.createElement('li');

        const taskLeft = document.createElement('div');
        taskLeft.className = 'task-left';

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.className = 'myCheckBox';

        const span = document.createElement('span');
        span.textContent = taskName.value;

        taskLeft.appendChild(checkbox);
        taskLeft.appendChild(span);

        const deleteButton = document.createElement('button');
        deleteButton.className = 'deleteButton';
        deleteButton.textContent = 'Delete';

        li.appendChild(taskLeft);
        li.appendChild(deleteButton);
        taskList.appendChild(li);

        deleteButton.addEventListener('click', () => {
            li.remove();
        });

        checkbox.addEventListener('change', () => {
            li.classList.toggle('completed');
        });
    }
});
