/*
 * app.js
 *
 * Handles user interactions and renders tasks on the page. The file is now
 * self-contained: DOM references are fetched once after the document is ready
 * and handlers use more descriptive names. Globals from categoryTasks.js
 * (tasks, createTask, addCategory) are still used but with improved naming.
 */



// wait for the DOM to be available before querying elements
document.addEventListener('DOMContentLoaded', () => {
    const taskNameInput = document.getElementById('add-task');
    const descriptionInput = document.getElementById('description');
    const categorySelect = document.getElementById('category');
    const addButton = document.querySelector('button');
    const addCategoryBtn = document.getElementById('Agregar-Categoria');
    const filterCategory = document.getElementById('filter-category');
    const filterState = document.getElementById('filter-state');
    const taskListContainer = document.getElementById('task-list');

    addButton.addEventListener('click', handleAddTask);
    addCategoryBtn.addEventListener('click', handleCreateCategory);
    filterCategory.addEventListener('change', applyFilters);
    filterState.addEventListener('change', applyFilters);

    function handleAddTask() {
        const name = taskNameInput.value.trim();
        const description = descriptionInput.value.trim();
        const selectedCategory = categorySelect.value;

        if (!name) {
            return;
        }
        if (!selectedCategory) {
            alert("Debe seleccionar un categoría");
            return;
        }

        createTask(name, description, selectedCategory);
        renderTasks(tasks);

        taskNameInput.value = "";
        descriptionInput.value = "";
    }

    function handleCreateCategory() {
        const title = prompt("Ingrese el nombre de la categoría: ");
        if (!title) {
            return;
        }
        if (addCategory(title)) {
            const option = document.createElement('option');
            option.value = title.toLowerCase();
            option.textContent = title;
            categorySelect.appendChild(option);
            addFilterOption(title);
        }
    }

    function addFilterOption(name) {
        const option = document.createElement('option');
        option.value = name.toLowerCase();
        option.textContent = name;
        filterCategory.appendChild(option);
    }

    function applyFilters() {
        const categoryVal = filterCategory.value;
        const stateVal = filterState.value;

        const filtered = tasks.filter(task => {
            const catMatch = !categoryVal || task.category === categoryVal;
            const stateMatch = !stateVal || task.state === stateVal;
            return catMatch && stateMatch;
        });
        renderTasks(filtered);
    }

    function renderTasks(list) {
        taskListContainer.innerHTML = "";

        list.forEach(task => {
            const taskEl = document.createElement('div');
            taskEl.classList.add('task');
            taskEl.dataset.id = task.id;

            const titleLink = document.createElement('a');
            titleLink.href = '#myModal';
            titleLink.textContent = task.name;
            taskEl.appendChild(titleLink);

            const icons = document.createElement('div');
            taskEl.appendChild(icons);

            const completeIcon = document.createElement('i');
            completeIcon.classList.add('bi', 'bi-check', 'icon-complete');
            completeIcon.addEventListener('click', toggleComplete);
            const deleteIcon = document.createElement('i');
            deleteIcon.classList.add('bi', 'bi-x', 'icon-deleted');
            deleteIcon.addEventListener('click', removeTask);
            icons.append(completeIcon, deleteIcon);

            if (task.state === 'completado') {
                taskEl.classList.add('completada');
            }

            taskListContainer.append(taskEl);
            createModal(task, taskEl);
        });
    }

    function createModal(task, parent) {
        const modal = document.createElement('div');
        modal.className = 'modal';
        modal.id = 'myModal';

        const content = document.createElement('div');
        content.className = 'modal-content';

        const close = document.createElement('div');
        close.className = 'close-btn';
        close.innerHTML = '<a href="#" class="modal_close">X</a>';

        const h2 = document.createElement('h2');
        h2.textContent = task.name;
        const desc = document.createElement('p');
        desc.textContent = task.description;

        const stateTitle = document.createElement('h3');
        stateTitle.textContent = 'Estado: ';
        const stateText = document.createElement('p');
        stateText.className = 'estado';
        stateText.textContent = task.state;

        const catText = document.createElement('p');
        catText.textContent = task.category;

        content.append(close, h2, desc, stateTitle, stateText, catText);
        modal.appendChild(content);
        parent.appendChild(modal);

        task.stateElement = stateText; // keep reference for updates
    }

    function toggleComplete(e) {
        const taskEl = e.target.closest('.task');
        const id = Number(taskEl.dataset.id);
        const task = tasks.find(t => t.id === id);
        if (task) {
            task.state = task.state === 'incompleto' ? 'completado' : 'incompleto';
            if (task.stateElement) {
                task.stateElement.textContent = task.state;
            }
            renderTasks(tasks);
        }
    }

    function removeTask(e) {
        const taskEl = e.target.closest('.task');
        const id = Number(taskEl.dataset.id);
        const index = tasks.findIndex(t => t.id === id);
        if (index !== -1) {
            tasks.splice(index, 1);
            taskEl.remove();
        }
    }
});