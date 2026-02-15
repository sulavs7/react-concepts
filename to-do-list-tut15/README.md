# React Todo List App

A simple **React-based Todo List** application that demonstrates core React concepts, state management, and browser storage. This project is a practical exercise in building interactive web applications with modern React.

You can see the live version here:  
[React Todo App on Vercel](https://reacts-concepts.vercel.app)

---

## Features

- **Add Tasks**: Users can type a task and add it to the list.
- **Delete Tasks**: Remove any task from the list.
- **Reorder Tasks**: Move tasks **up** or **down** the list.
- **Persistent Storage**: Tasks are saved in the browser using `localStorage` and remain after page refresh.
- **Interactive UI**: Buttons and task layout designed for clarity and ease of use.

---

## Key Learnings

1. **React State Management (`useState`)**
   - Learned how to use `useState` for storing dynamic data.
   - Demonstrated **array manipulation** for adding, deleting, and reordering tasks.

2. **Persistent State with `localStorage`**
   - Initialized state from `localStorage` using a **lazy initializer** function:
     ```js
     const [tasks, setTasks] = useState(() => {
       const saved = localStorage.getItem("tasks");
       return saved ? JSON.parse(saved) : [];
     });
     ```
   - Used `useEffect` to update `localStorage` whenever tasks change:
     ```js
     useEffect(() => {
       localStorage.setItem("tasks", JSON.stringify(tasks));
     }, [tasks]);
     ```

3. **Handling User Input**
   - Controlled input with `value` and `onChange` to manage new tasks.
   - Used `trim()` to prevent adding empty tasks.

4. **Dynamic List Rendering**
   - Rendered tasks using `map()` with `key` for React list reconciliation.
   - Learned to combine task text and action buttons in a **flex layout**.

5. **Array Manipulation**
   - Added new tasks with the **spread operator**:
     ```js
     setTasks((t) => [...t, newTask]);
     ```
   - Deleted tasks using `filter()`:
     ```js
     setTasks(tasks.filter((_, i) => i !== index));
     ```
   - Reordered tasks by swapping elements in an array:
     ```js
     [tasks[index], tasks[index - 1]] = [tasks[index - 1], tasks[index]];
     ```

6. **Component Structure & JSX**
   - Learned how to organize JSX with **nested buttons** and dynamic lists.
   - Applied **flexbox** in CSS for clean task layout.

7. **Event Handling**
   - Used event handlers like `onClick` and `onChange` to update state.
   - Learned about passing **index parameters** in handlers.

---
