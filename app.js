// variables para agregar una tarea

const nameTask = document.getElementById('add-task');
const descriptionn = document.getElementById('description');
const category = document.getElementById('category');
const buttonAdd =  document.querySelector('button');

const agregarCategoria = document.getElementById('Agregar-Categoria')



// Esta función sirve para poder crear un elemento visual de una tarea
function addTask (){
    if (nameTask.value) {

        let name = nameTask.value;
        let description = descriptionn.value
        let selectedCategory = category.value

        if (selectedCategory === "Seleccione una categoría" || !selectedCategory) {
            alert("Debe seleccionar un categoría");
            return;
        };

        createTask(name, description, selectedCategory )
        renderList(taskArray)

        nameTask.value = "";
        descriptionn.value = "" ;
    };
};

function addPopUp (title, description, state, category, padre) {

    // Genero el elemento modal
    let newPopUp = document.createElement('div');
    newPopUp.classList.add('modal')
    newPopUp.id = 'myModal'

    // Genero el bloque del contenido dentro del elemento modal
    let modalContent = document.createElement('div')
    modalContent.classList.add('modal-content')
    newPopUp.appendChild(modalContent)

    // Dentro del contenido:

    // Boton para cerrar
    let closeBtn = document.createElement('div')
    closeBtn.classList.add('close-btn')
    modalContent.appendChild(closeBtn)

    let closeBtnA = document.createElement('a')
    closeBtnA.classList.add('modal_close')
    closeBtnA.href = '#'
    closeBtnA.innerText = 'X'
    closeBtn.appendChild(closeBtnA)

    // Titulo de la tarea
    let h2 = document.createElement('h2')
    h2.innerText = title

    // Descripción de la tarea
    let text = document.createElement('p')
    text.innerText = description

    // Estado de la tarea
    let stateTitle = document.createElement('h3')
    stateTitle.innerText = "Estado: "
    
    let stateText = document.createElement('p')
    stateText.innerText = state
    stateText.classList.add('estado')
    
    // Categoria de la tarea
    let categoryText = document.createElement('p')
    categoryText.innerText = category


    modalContent.append(h2, text, stateTitle, stateText, categoryText)
    padre.appendChild(newPopUp)
    
    // Guardar referencia al elemento de estado en la tarea
    const taskID = parseInt(padre.dataset.id)
    const tarea = taskArray.find(t => t.id === taskID)
    if (tarea) {
        tarea.stateElement = stateText
    }
    
}

// Esta función sirve para cambiar el estado de una tarea de manera visual
function completeTask(e) {
    let task = e.target.closest('.task')

    let taskID = parseInt(task.dataset.id)

    let tarea = taskArray.find(t => t.id === taskID)

    if (tarea){
        tarea.state = tarea.state === "incompleto" ? "completado" : "incompleto";
        
        // Actualizar el estado en el modal si existe
        if (tarea.stateElement) {
            tarea.stateElement.innerText = tarea.state
        }

        // Re-renderizar para aplicar clases correctamente
        renderList(taskArray);
    };
}

// Esta función sirve para borrar el elemento visual de la tarea
function deletedTask(e) {
    let task = e.target.closest('.task')
    
    let taskID = parseInt(task.dataset.id)

    let tarea = taskArray.find(t => t.id === taskID)

    if (tarea) {
        const index = taskArray.indexOf(tarea);
        taskArray.splice(index, 1);
    }

    task.remove()
}

function crearCategoria(e) {
    let titulo = prompt("Ingrese el nombre de la categoría: ")

    if (addCategory(titulo)) {

        let newOption = document.createElement('option');           // Crea el elemento Option
        newOption.value = titulo.toLowerCase();                     // Agrega un value
        newOption.textContent = titulo;                             // Y un texto
        
        category.appendChild(newOption)
        fillCategoryFilter(titulo)
    };
}

function fillCategoryFilter(nameCategory){
    let catOption = document.createElement('option')
    catOption.value = nameCategory.toLowerCase()
    catOption.textContent = nameCategory

    document.getElementById('filter-category').appendChild(catOption)
}

const renderList = (taskToShow) => {
    const taskList = document.getElementById('task-list')

    taskList.innerHTML = ""

    taskToShow.forEach(task => {
        // Genero contenedor de tarea
        let newTask = document.createElement('div');
        newTask.classList.add('task');

        newTask.dataset.id = task.id;

        // Genero el nombre de la tarea y lo agrego al contenedor   
        let refe = document.createElement('a')
        refe.href='#myModal'
        refe.textContent = task.name;
        newTask.appendChild(refe)

        // Genero el contenedor de icono y lo agrego al contenedor tarea
        let icons = document.createElement('div')
        icons.classList.add()
        newTask.appendChild(icons)

        // Iconos
        let complete = document.createElement('i')
        complete.classList.add('bi', 'bi-check', 'icon-complete')
        complete.addEventListener('click', completeTask);
        

        let deleted = document.createElement('i')
        deleted.classList.add('bi', 'bi-x', 'icon-deleted')
        deleted.addEventListener('click', deletedTask)

        icons.append(complete, deleted)

        // Aplicar clase completada si el estado es completado
        if (task.state === 'completado') {
            newTask.classList.add('completada')
        }

        taskList.appendChild(newTask)
        addPopUp(task.name, task.description, task.state, task.category, newTask)
    });

}

const filterTask = () => {
    const categoryFilter = document.getElementById('filter-category').value;
    const stateFilter = document.getElementById('filter-state').value;

    let taskToShow = taskArray.filter(task => {
        const categoryMatch = categoryFilter === "" || task.category === categoryFilter;
        const stateMatch = stateFilter === "" || task.state === stateFilter;

        return categoryMatch && stateMatch;
    });

   renderList(taskToShow);
}
buttonAdd.addEventListener('click', addTask)

agregarCategoria.addEventListener('click', crearCategoria)

document.getElementById('filter-category').addEventListener('change', filterTask)
document.getElementById('filter-state').addEventListener('change', filterTask)