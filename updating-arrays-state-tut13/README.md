# React State with Arrays

This project demonstrates how to **manage and update arrays in React state** using `useState`.  
It covers adding and removing elements, using the **updater function**, and preserving immutability.

---

## Key Learnings

---

### 1. Arrays Can Be Stored in State

React state can store **arrays** just like strings or objects.

```jsx
const [fruits, setFruits] = useState(["Apple", "Banana", "Orange"]);
```

fruits → current array state

setFruits → function to update the array

### 2. Adding Items to an Array

Do not mutate state directly. Instead, create a new array.

```jsx
setFruits((f) => [...f, "Mango"]);
```

f → previous array

...f → spreads all existing elements

"Mango" → new element added at the end

✅ This preserves immutability and triggers a re-render.

### 3. Removing Items from an Array

Use array methods like filter to create a new array without mutating state.

```jsx
setFruits(fruits.filter((_, index) => index !== removeIndex));
```

\_ → current element (ignored here)

index → current index

removeIndex → index to remove

Returns a new array, old array stays unchanged

### 4. Using Updater Function for Arrays

When new array depends on previous state, always use updater function:

```jsx
setFruits((prev) => [...prev, newFruit]);
```

- Ensures latest state is used

- Avoids stale state issues if multiple updates occur

### 5. Event Handling with Arrays

we can link inputs and buttons to update arrays dynamically:

<input id="add-fruit" type="text" placeholder="Enter a fruit" />
<button onClick={handleAddFruit}>Add</button>

Input value → new array element

Button triggers state update

UI automatically re-renders

### 6. Rendering Arrays in JSX

Map over arrays to render elements:

```jsx
<ul>
  {fruits.map((fruit, index) => (
    <li key={index}>{fruit}</li>
  ))}
</ul>
```

Always use key prop for list items

Ensures React can track changes efficiently
