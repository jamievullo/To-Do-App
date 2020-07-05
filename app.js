document.addEventListener("DOMContentLoaded", function() {
    getFromLocalStorage()
})

// after task is completed add strikethrough

let form = document.getElementById('addForm');
let itemList = document.getElementById('items');

form.addEventListener('submit', addItem);
itemList.addEventListener('click', deleteTask);

// local storage for local storage
let taskArray = []

function addItem(event){
    event.preventDefault();

    let inputValue = document.getElementById('item').value;
    
    if(isTaskEmpty(inputValue) !== true) {        
        appendOrNotAppend(inputValue)
    }
    taskArray.push(inputValue)
    addToLocalStorage()
    // clear form after submission    
    document.getElementById("item").value = ""
}

function deleteTask(event){
    if(event.target.classList.contains('delete')){        
        let li = event.target.parentElement;
        itemList.removeChild(li);        
        console.log(stringSplitter(li.innerText))
        let comparisonString = li.innerText

        taskArray.filter(selectedTask => {
            selectedTask === stringSplitter(comparisonString)
        })

        // taskArray.forEach(task => {
        //     if(task === stringSplitter(comparisonString)) {

        //         // deleteFromLocalStorage(task)
        //     }
        // })
    }
}

function isTaskEmpty(inputValue) {
    if(inputValue === "") {
        window.alert("Cannot Submit Empty Task")
        return true
    }
}

function appendOrNotAppend(inputValue) {

    let li = document.createElement('li');
        li.className = 'list-group-item';
        li.appendChild(document.createTextNode(inputValue));
        
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
    taskArray = JSON.parse(window.localStorage.getItem('task'))
    if(taskArray.length > 0) {
        taskArray.forEach(task => {
            appendOrNotAppend(task)
        })
    }
}

function deleteFromLocalStorage(task) {
    window.localStorage.removeItem('task')
}

function stringSplitter(str) {

    let newString = str.split('')
    let newerString = newString.pop()
    return newString.join('')
    console.log(newString)
}