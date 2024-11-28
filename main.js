const input = document.querySelector('.input'); 
const botonAgregar = document.querySelector('.boton-agregar'); 
const container = document.querySelector('.container'); 

class Item { 
    constructor(nuevaTarea, container) { 
        this.nuevaTarea = nuevaTarea; 
        this.crearDiv(nuevaTarea, container); 
    } 
    // MÉTODO
    crearDiv(tarea, container) { 
        const inputItem = document.createElement('input'); 
        inputItem.type = 'text'; 
        inputItem.classList.add('item-input'); // ESTILOS DE MI CSS
        inputItem.disabled = true; // DESACTIVADO EL CAMPO AL PRINCIPIO 
        inputItem.value = tarea; // ASIGNACIÓN DE TEXTO DE LA TAREA

        // CREACIÓN DEL CONTENEDOR PARA LAS TAREAS
        const div = document.createElement('div'); 
        div.classList.add('item'); 

        // BOTÓN EDITAR 'CANDAD0'
        const botonEditar = document.createElement('button'); 
        botonEditar.classList.add('boton-editar'); 
        botonEditar.innerHTML = '<i class="fas fa-lock"></i>'; 

        // BOTÓN REMOVER 'TACHO'
        const botonRemover = document.createElement('button'); 
        botonRemover.classList.add('boton-remover'); 
        botonRemover.innerHTML = '<i class="fas fa-trash"></i>'; 

        // AÑADE AL DOM
        div.appendChild(inputItem); 
        div.appendChild(botonEditar); 
        div.appendChild(botonRemover); 
        container.appendChild(div); 

        //EVENTOS 
        botonEditar.addEventListener('click', () => this.editar(inputItem, botonEditar)); // EDITA TEXTO EN EL INPUT
        botonRemover.addEventListener('click', () => this.remover(div)); // ELIMINA TAREA
    } 

    // MÉTODO QUE CAMBIA EL ESTADO DEL CAMPO DE TEXTO Y ACTUALIZA EL BOTÓN DEL CANDADO 
    editar(input, boton) { 
        input.disabled = !input.disabled; 
        boton.innerHTML = input.disabled 
            ? '<i class="fas fa-lock"></i>' 
            : '<i class="fas fa-lock-open"></i>'; 
    } 

    // MÉTODO QUE REMUEVE EL CONTENEDOR COMPLETO DE LA TAREA DESCRITA 
    remover(div) { 
        div.remove(); 
    } 
}

// FUNCIÓN QUE OBTIENE Y VALIDA EL TEXTO DEL INPUT
function chequearInput() {
    const nuevaTarea = input.value.trim(); // ELIMINA ESPACIOS AL INICIO Y FINAL CUANDO OBTIENE EL TEXTO DEL INPUT
    if (nuevaTarea !== '') {
        new Item(nuevaTarea, container);
        input.value = '';
    } else {
        alert('Por favor, ingresa una tarea válida.');
    }
}

botonAgregar.addEventListener('click', chequearInput); // EVENTO PARA AGREGAR TAREAS-LLAMA A LA FUNCIÓN ANTERIOR
