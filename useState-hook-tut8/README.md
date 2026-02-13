# React Hooks — useState (Complete Guide)

This project demonstrates the **React `useState` Hook** and how state updates trigger **Virtual DOM re-rendering**. It covers:

- What is state
- Why normal variable update does NOT work
- Why `setState` works
- useState with **string, number, boolean**
- Functional state update
- Mini Project — Counter App

---

## 1. What is `useState`?

`useState` is a React Hook that allows functional components to **store and update data (state)**.

When state changes → **React re-renders the Virtual DOM → UI updates automatically.**

---

## 2. Why normal variable update does NOT work

### Wrong Way (No Re-render)

```jsx
import React, { useState } from "react";

function MyComponent() {
  let [name, setName] = useState();

  const updateName = () => {
    ((name = "Spongebob"), console.log(name));
  };

  return (
    <div>
      <p>Name: {name}</p>
      <button onClick={updateName}>Set Name</button>
    </div>
  );
}

export default MyComponent;
```

Output

UI:

Name:
Set Name

Console:

Spongebob

## 3.Why UI does NOT update?

- we updated normal variable name.React does NOT detect normal variable changes so No Virtual DOM re-render happens hence UI stays the same.React only re-renders when state setter function (setState) is used

## 4. Correct Way — Using setState

```jsx
const updateName = () => {
  setName("Spongebob");
};
```

### Why this works?

- `setName()` tells React → state has changed

- React triggers Virtual DOM re-render

- React compares old vs new DOM (diffing)

- Only changed parts update

- UI updates automatically

## 5. useState with Different Data Types

React state can store:

- String

- Number

- Boolean

- Object

- Array

- Example:

```jsx
import React, { useState } from "react";

function MyComponent() {
  const [name, setName] = useState("guest"); // string
  const [age, setAge] = useState(0); // number
  const [isEmployed, setIsEmployed] = useState(false); // boolean

  const updateName = () => {
    setName("Spongebob");
  };

  const incrementAge = () => {
    setAge(age + 1);
  };

  const toggleEmployedStatus = () => {
    setIsEmployed((prev) => !prev);
  };

  return (
    <div>
      <p>Name: {name}</p>
      <button onClick={updateName}>Set Name</button>

      <p>Age: {age}</p>
      <button onClick={incrementAge}>Increment Age</button>

      <p>Is Employed: {isEmployed ? "Yes" : "No"}</p>
      <button onClick={toggleEmployedStatus}>Toggle Status</button>
    </div>
  );
}

export default MyComponent;
```

## 5. Functional State Update (Important)

```jsx
setIsEmployed((prev) => !prev);
```

### Why use this?

- React state updates are asynchronous

- Using previous value ensures correct state

- Prevents stale state bugs
