document.addEventListener("DOMContentLoaded", function() {
    getFromLocalStorage()
})

// local storage for local storage
let taskArray = []

let form = document.getElementById('addForm');
let itemList = document.getElementById('items');

form.addEventListener('submit', addItem);
itemList.addEventListener('click', deleteTask);

function addItem(event){
    event.preventDefault();

    let inputValue = document.getElementById('item').value;
    
    if(isTaskEmpty(inputValue) !== true) {        
        appendOrDelete(inputValue)
    }
    taskArray.push(inputValue)
    // clear form after submission    
    document.getElementById("item").value = ""
    addToLocalStorage()
}

function isCompleted(event) {
    event.target.style.textDecoration = "line-through"
}

function deleteTask(event){
    if(event.target.classList.contains('delete')){        
        let li = event.target.parentElement;
        itemList.removeChild(li);

        let comparisonString = li.innerText
        let x = taskArray.filter(selectedTask => {
            console.log(selectedTask === stringSplitter(comparisonString))
            return selectedTask !== stringSplitter(comparisonString)
        })
        taskArray = x
        addToLocalStorage(taskArray)
    }
}

function isTaskEmpty(inputValue) {
    if(inputValue === "") {
        window.alert("Cannot Submit Empty Task")
        return true
    }
}

function appendOrDelete(inputValue) {

    let li = document.createElement('li');
        li.className = 'list-group-item';
        li.appendChild(document.createTextNode(inputValue));
        li.addEventListener('click', isCompleted)
        
        let deleteBtn = document.createElement('button');
        deleteBtn.className = 'btn delete';
        deleteBtn.appendChild(document.createTextNode('X'));
        li.appendChild(deleteBtn);
        itemList.appendChild(li);
}

function addToLocalStorage() {
    window.localStorage.setItem('task',JSON.stringify(taskArray))
}

function getFromLocalStorage() {
    tasks = JSON.parse(window.localStorage.getItem('task'))
    console.log(tasks)
    if(tasks !== null) {
        taskArray = tasks
        tasks.forEach(task => {
            appendOrDelete(task)
        })
    }
}

function deleteFromLocalStorage() {
    window.localStorage.removeItem('task')
}

// remove 'X' from text content in selected element to be deleted from page and array and local storage
function stringSplitter(str) {
    let newString = str.split('')
    let newerString = newString.pop()
    return newString.join('')
}