/*
 * categoryTasks.js
 *
 * Shared in-memory collections and helpers for tasks and categories.
 * The global arrays are kept as const bindings and given clear, English
 * names. Functions validate their arguments and avoid unnecessary loops.
 */


// categories are stored normalized (lowercase, trimmed)
const categories = [];
// tasks created via createTask
const tasks = [];

/**
 * Add a new task object to the `tasks` array.
 *
 * @param {string} title
 * @param {string} description
 * @param {string} category
 */
function createTask(title, description, category) {
    const newTask = {
        id: Date.now(),
        name: title,
        category,
        description,
        state: "incompleto"
    };
    tasks.push(newTask);
}

/**
 * Register a new category if it doesn't already exist and is non-empty.
 * Returns true when the category was added; false otherwise.
 *
 * @param {string} name
 * @returns {boolean}
 */
function addCategory(name) {
    const normalized = name.trim().toLowerCase();
    if (!normalized) {
        alert("No puede dejar el campo vacio");
        return false;
    }
    if (categories.includes(normalized)) {
        alert("Categoria repetida");
        return false;
    }
    categories.push(normalized);
    return true;
}