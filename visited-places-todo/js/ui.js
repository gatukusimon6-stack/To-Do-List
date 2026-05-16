// Make a new to-do list
let myList = new ToDoList();

// Get the HTML elements
let form = document.getElementById("task-form");
let input = document.getElementById("task-input");
let list = document.getElementById("task-list");

// When user submits the form
form.addEventListener("submit", function(event) {
    event.preventDefault(); // Stop page from reloading
    
    let text = input.value;
    
    if (text !== "") {
        myList.addTask(text); // Add to business logic
        input.value = ""; // Clear the box
        showTasks(); // Update the screen
    }
});

// Show all tasks on the screen
function showTasks() {
    list.innerHTML = ""; // Clear the list first
    
    for (let i = 0; i < myList.tasks.length; i++) {
        let task = myList.tasks[i];
        
        // Make a list item
        let li = document.createElement("li");
        
        // Checkbox for completing
        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = task.completed;
        
        // When checkbox is clicked
        checkbox.addEventListener("click", (function(index) {
            return function() {
                myList.tasks[index].toggle();
                showTasks();
            };
        })(i));
        
        // Task text
        let span = document.createElement("span");
        span.textContent = " " + task.description;
        
        if (task.completed === true) {
            span.style.textDecoration = "line-through";
            span.style.color = "gray";
        }
        
        // Delete button
        let deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        
        deleteBtn.addEventListener("click", (function(index) {
            return function() {
                myList.removeTask(index);
                showTasks();
            };
        })(i));
        
        // Put everything together
        li.appendChild(checkbox);
        li.appendChild(span);
        li.appendChild(deleteBtn);
        list.appendChild(li);
    }
}