

};

// Prototype: Get display text
Task.prototype.getDisplayText = function() {
    const status = this.completed ? '✓' : '○';
    return `${status} [${this.priority.toUpperCase()}] ${this.description}`;
};

// Constructor for ToDoList (manages all tasks)
function ToDoList() {
    this.tasks = [];
}

// Prototype: Add a new task
ToDoList.prototype.addTask = function(description, priority) {
    const task = new Task(description, priority);
    this.tasks.push(task);
    return task;
};

// Prototype: Remove a task by ID
ToDoList.prototype.removeTask = function(taskId) {
    const initialLength = this.tasks.length;
    this.tasks = this.tasks.filter(task => task.id !== taskId);
    return this.tasks.length < initialLength;  // Returns true if removed
};

// Prototype: Get all tasks (optionally filter by completion)
ToDoList.prototype.getTasks = function(filter = 'all') {
    if (filter === 'completed') {
        return this.tasks.filter(task => task.completed);
    }
    if (filter === 'active') {
        return this.tasks.filter(task => !task.completed);
    }
    return this.tasks;
};

// Prototype: Get task by ID
ToDoList.prototype.getTaskById = function(taskId) {
    return this.tasks.find(task => task.id === taskId);
};

// Prototype: Toggle task completion by ID
ToDoList.prototype.toggleTask = function(taskId) {
    const task = this.getTaskById(taskId);
    if (task) {
        return task.toggleComplete();
    }
    return false;
};

// Prototype: Get completion stats
ToDoList.prototype.getStats = function() {
    const total = this.tasks.length;
    const completed = this.tasks.filter(t => t.completed).length;
    return {
        total: total,
        completed: completed,
        active: total - completed,
        percentComplete: total === 0 ? 0 : Math.round((completed / total) * 100)
    };
};

// Export for testing (Node.js) or global use (browser)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { Task, ToDoList };
}