# To Do List

## Author
- **Name:** Gatuku Simon
- **GitHub:** [@gatukusimon6-stack](https://github.com/gatukusimon6-stack)
- **Date:** May 2026

## Description
A To Do List application built with JavaScript constructors and prototypes. Users can add tasks, mark them as complete, remove tasks, and filter by status. Built using test-driven development.

## Technologies Used
- HTML5
- CSS3
- JavaScript (ES5 Constructors & Prototypes)
- Git

## Project Setup
1. Clone this repository
2. Open `index.html` in your browser
3. Start adding tasks!

## Live Site
[View Live Demo](http://127.0.0.1:5500/visited-places-todo/index.html)

## License
MIT License

---

## Tests (Pseudo-coded)

### Task Constructor
1. **Create a new task**
   - Input: `new Task("Buy groceries", "high")`
   - Expected Output: Task object with:
     - `description: "Buy groceries"`
     - `priority: "high"`
     - `completed: false`
     - `id` is a number
     - `createdAt` is a Date object

2. **Default priority**
   - Input: `new Task("Walk the dog")`
   - Expected Output: `priority: "medium"`

### Task Prototype Methods
3. **toggleComplete()**
   - Input: `task.toggleComplete()`
   - Expected Output: `true` (task is now completed)
   - Input again: `task.toggleComplete()`
   - Expected Output: `false` (task is now active)

4. **getDisplayText()**
   - Input: Active task `task.getDisplayText()`
   - Expected Output: `"○ [HIGH] Buy groceries"`
   - Input: Completed task `task.getDisplayText()`
   - Expected Output: `"✓ [HIGH] Buy groceries"`

### ToDoList Constructor
5. **Create new list**
   - Input: `new ToDoList()`
   - Expected Output: Object with empty `tasks` array

### ToDoList Prototype Methods
6. **addTask()**
   - Input: `todoList.addTask("Read book", "low")`
   - Expected Output: Task object added to `todoList.tasks`
   - `todoList.tasks.length` increases by 1

7. **removeTask()**
   - Input: `todoList.removeTask(taskId)`
   - Expected Output: `true` if task was removed, `false` if not found
   - `todoList.tasks.length` decreases by 1

8. **getTasks() - all**
   - Input: `todoList.getTasks('all')`
   - Expected Output: Array of all tasks

9. **getTasks() - active**
   - Input: `todoList.getTasks('active')`
   - Expected Output: Array of only incomplete tasks

10. **getTasks() - completed**
    - Input: `todoList.getTasks('completed')`
    - Expected Output: Array of only completed tasks

11. **getTaskById()**
    - Input: `todoList.getTaskById(validId)`
    - Expected Output: The matching Task object
    - Input: `todoList.getTaskById(invalidId)`
    - Expected Output: `undefined`

12. **toggleTask()**
    - Input: `todoList.toggleTask(taskId)`
    - Expected Output: `true` or `false` (new completion status)

13. **getStats()**
    - Input: `todoList.getStats()`
    - Expected Output: Object with:
      - `total: number`
      - `completed: number`
      - `active: number`
      - `percentComplete: number` (0-100)

---
