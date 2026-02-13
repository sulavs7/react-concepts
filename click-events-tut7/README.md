# Click Events Tutorial

## Concept

This folder demonstrates handling click events in React components using Vite.  
It covers:

- Functions without arguments
- Functions with arguments
- Using arrow functions in event handlers

## Key Learnings

- Difference between `onClick={handleClick}` and `onClick={handleClick()}`:
  - `onClick={handleClick}` → passes the **function reference**; React calls it only when the button is clicked.
  - `onClick={handleClick()}` → calls the function **immediately during rendering**.
- Always pass the function reference to avoid unintended execution during render.
- To pass arguments to a function, use an arrow function:
  ```jsx
  <button onClick={() => handleClick2("Bro")}>Click me</button>
  ```
- onClick can be used on any HTML element, including images.

- Using the event object (e) lets us access and modify the target element:

```jsx
e.target.style.display = "none";
```

- This hides the image when clicked.

- e.target is used when we want to access or modify the element that triggered the event.We can inspect the full event object by logging it:

```jsx
const handleClick = (e) => {
  console.log(e);
};
```

- This helps us see all available properties (like target, type, clientX, clientY, etc.) and understand what we can manipulate.

- React also supports other events like onDoubleClick, which triggers when the element is double-clicked.

- Functions inside event handlers can contain logic like counters, conditions, and dynamic behavior.
