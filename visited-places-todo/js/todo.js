// Constructor for a single task
function Task(description) {
    this.description = description;
    this.completed = false;
}

// Toggle if task is done or not
Task.prototype.toggle = function() {
    if (this.completed === false) {
        this.completed = true;
    } else {
        this.completed = false;
    }
};

// Constructor for the whole list
function ToDoList() {
    this.tasks = [];
}

// Add a new task to the list
ToDoList.prototype.addTask = function(description) {
    let task = new Task(description);
    this.tasks.push(task);
};

// Remove a task by its position in the array
ToDoList.prototype.removeTask = function(index) {
    this.tasks.splice(index, 1);
};

// Get only the tasks that are done
ToDoList.prototype.getCompleted = function() {
    let completed = [];
    for (let i = 0; i < this.tasks.length; i++) {
        if (this.tasks[i].completed === true) {
            completed.push(this.tasks[i]);
        }
    }
    return completed;
};

// Get only the tasks that are not done
ToDoList.prototype.getActive = function() {
    let active = [];
    for (let i = 0; i < this.tasks.length; i++) {
        if (this.tasks[i].completed === false) {
            active.push(this.tasks[i]);
        }
    }
    return active;
};