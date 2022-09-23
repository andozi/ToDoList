const form = document.getElementById('form');
const input = document.getElementById('input');
const todos = document.getElementById('todos');
const btnAdd = document.getElementById('add');

btnAdd.addEventListener("click", (e) => {

    const todoText = input.value;

    if(todoText) { 
        const todoE1 = document.createElement("li");
        todoE1.innerText = todoText;

        todoE1.addEventListener("click", () => {
            todoE1.classList.toggle("li-completed");
        });

        todoE1.addEventListener("contextmenu", (e) => {
            e.preventDefault();
            todoE1.remove();
        });

        todos.appendChild(todoE1);

        input.value = "";
    }
});

    