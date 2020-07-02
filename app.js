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

    // checks for no input
    if(isTaskEmpty(inputValue) !== true) {
        addTodo(inputValue)
    }
    // clears input field after task submitted
    document.getElementById("todo-field").value = ""
}

function addTodo(inputValue) {

    let todos = document.getElementById("todos")
    let todoDiv = `
        <div id="tasks">
            <button id="todo-completed-button">
            O
            </button>
            ${inputValue}
            <button id="todo-delete-button" onClick="deleteTodo()">
            X
            </button>
        </div>`       
    todos.innerHTML += todoDiv

    deleteTodo()
    // checkComplete()
    // currently can only delete one task
    // can also add a task with no input
}

function deleteTodo() {
    let selectedTodo = document.getElementById("todo-delete-button")
    selectedTodo.addEventListener("click", function(event) {
        event.preventDefault()
        let parent = selectedTodo.parentElement
        parent.remove()
    })
}

// function checkComplete() {
//     let selectedComplete = document.getElementsByClassName("undone")
//     selectedComplete.addEventListener("click", function(event) {
//         event.preventDefault()
//         selectedComplete
//     })
// }

function isTaskEmpty(inputValue) {
    if(inputValue === "") {
        window.alert("Cannot Submit Empty Task")
        return true
    }
}
