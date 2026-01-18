let categoryList = [];

let taskArray = [];

function createTask(titulo, descripcion, categoria){
    const nuevaTarea = {
        id: Date.now(),
        name: titulo,
        category: categoria,
        description: descripcion,
        state: "incompleto"
    };
    taskArray.push(nuevaTarea);
};



function addCategory(nombre){
    if (nombre === "") {
        alert("No puede dejar el campo vacio")
        return false;
    };

    for (let i = 0; i < categoryList.length; i++){
        if (categoryList[i] == nombre.toLowerCase()) {
            alert("Categoria repetida")
            return false;
        };
        
    };

    categoryList.push(nombre.toLowerCase());
    return true;
};