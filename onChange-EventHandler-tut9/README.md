## React Form Handling — `onChange` Event & Controlled Components

This example demonstrates how to handle **form inputs in React** using the `onChange` event and `useState`.  
It shows how React creates **controlled components**, where form values are fully controlled by React state.

---

### What is `onChange`?

`onChange` is an **event handler** used primarily with form elements such as:

- `<input>`
- `<textarea>`
- `<select>`
- `<radio>`

It **triggers a function every time the value of the input changes**.

---

### Learnings and key concepts covered 
#### 1. Controlled Components

- All form elements are controlled by React state:
```jsx
<input value={name} onChange={handleNameChange} />
```

#### 2. Accessing Input Value
```jsx
event.target.value
```


- event → triggered when input changes

- event.target → the element that triggered event

- value → current value inside the input