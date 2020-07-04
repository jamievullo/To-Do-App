document.addEventListener("DOMContentLoaded", function() {

})

let form = document.getElementById('addForm');
let itemList = document.getElementById('items');

form.addEventListener('submit', addItem);
itemList.addEventListener('click', deleteTask);

function addItem(event){
    event.preventDefault();

    let inputValue = document.getElementById('item').value;
    
    if(isTaskEmpty(inputValue) !== true) {        
        let li = document.createElement('li');
        li.className = 'list-group-item';
        li.appendChild(document.createTextNode(inputValue));
        
        let deleteBtn = document.createElement('button');
        deleteBtn.className = 'btn delete';
        deleteBtn.appendChild(document.createTextNode('X'));
        li.appendChild(deleteBtn);
        itemList.appendChild(li);
    }
    // clear form after submission    
    document.getElementById("item").value = ""
}

function deleteTask(event){
    if(event.target.classList.contains('delete')){        
        let li = event.target.parentElement;
        itemList.removeChild(li);        
    }
}

function isTaskEmpty(inputValue) {
    if(inputValue === "") {
        window.alert("Cannot Submit Empty Task")
        return true
    }
}