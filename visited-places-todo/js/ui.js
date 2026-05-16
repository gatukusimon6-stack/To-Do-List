// js/ui.js

// Create a ToDoList instance
const todoList = new ToDoList();

// DOM Elements
const taskForm = document.getElementById('task-form');
const taskInput = document.getElementById('task-input');
const prioritySelect = document.getElementById('priority-select');
const taskList = document.getElementById('task-list');
const filterButtons = document.querySelectorAll('.filter-btn');
const statsDisplay = document.getElementById('stats');

let currentFilter = 'all';

// Render tasks to the page
function renderTasks() {
    const tasks = todoList.getTasks(currentFilter);
    taskList.innerHTML = '';

    if (tasks.length === 0) {
        taskList.innerHTML = '<li class="empty">No tasks yet. Add one above!</li>';
        return;
    }

    tasks.forEach(task => {
        const li = document.createElement('li');
        li.className = `task-item ${task.completed ? 'completed' : ''} priority-${task.priority}`;
        li.innerHTML = `
            <span class="task-text" onclick="toggleTask(${task.id})">
                ${task.getDisplayText()}
            </span>
            <button class="delete-btn" onclick="deleteTask(${task.id})">×</button>
        `;
        taskList.appendChild(li);
    });

    updateStats();
}

// Add new task
taskForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const description = taskInput.value.trim();
    const priority = prioritySelect.value;

    if (description) {
        todoList.addTask(description, priority);
        taskInput.value = '';
        renderTasks();
    }
});

// Toggle task completion
function toggleTask(taskId) {
    todoList.toggleTask(taskId);
    renderTasks();
}

// Delete task
function deleteTask(taskId) {
    todoList.removeTask(taskId);
    renderTasks();
}

// Filter tasks
filterButtons.forEach(btn => {
    btn.addEventListener('click', function() {
        currentFilter = this.dataset.filter;
        filterButtons.forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        renderTasks();
    });
});

// Update stats display
function updateStats() {
    const stats = todoList.getStats();
    statsDisplay.innerHTML = `
        <span>Total: ${stats.total}</span>
        <span>Active: ${stats.active}</span>
        <span>Completed: ${stats.completed}</span>
        <span>${stats.percentComplete}% Done</span>
    `;
}

// Initial render
renderTasks();