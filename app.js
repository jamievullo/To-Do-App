document.addEventListener("DOMContentLoaded", function() {

})

let button = document.getElementById("add-button")

button.addEventListener("click", function(event) {
    event.preventDefault()
    getValue()
})

function getValue() {

    let formInput = document.getElementById("todo-field")
    let inputValue = formInput.value
    console.log(inputValue)

    addTodo(inputValue)
    document.getElementById("todo-field").value = ""
}

function addTodo(inputValue) {

    let todos = document.getElementById("todos")
    let todoDiv = `
        <div class="undone" id="tasks">
            <button id="todo-completed-button">
            O
            </button>
            ${inputValue}
            <button id="todo-delete-button">
            X
            </button>
        </div>`       
    todos.innerHTML += todoDiv

    deleteTodo()
    checkComplete()
    // create a button when todo added
}

function deleteTodo() {
    let selectedTodo = document.getElementById("tasks")
    selectedTodo.addEventListener("click", function(event) {
        event.preventDefault()
        selectedTodo.remove()
    })
}

function checkComplete() {
    let selectedComplete = document.getElementsByClassName("undone")
    selectedComplete.addEventListener("click", function(event) {
        event.preventDefault()
        selectedComplete
    })
}
