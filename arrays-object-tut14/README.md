## Key Learnings — Managing Array of Objects in React State

This component helped understand how to **store, update, and manage an array of objects using `useState`** in React.

---

### 1. Storing Array of Objects in State

React state can hold complex data like **arrays of objects**.

```jsx
const [cars, setCars] = useState([]);
```

Each car is an object:

```jsx
{ year: 2024, make: "Toyota", model: "Corolla" }
```

---

### 2. Adding Object to State (Immutable Update)

State should **never be mutated directly**.  
Use the **spread operator** to create a new array.

```jsx
const newCar = { year: carYear, make: carMake, model: carModel };
setCars(c => [...c, newCar]);
```

**What happens:**

- Copies old array `...c`
- Adds new object at the end
- React detects change → re-renders UI

---

### 3. Resetting Input State After Update

After adding data, reset input fields for better UX.

```jsx
setCarYear(new Date().getFullYear());
setCarMake("");
setCarModel("");
```

---

### 4. Removing Item from Array (Using `filter`)

To delete an item, create a **new filtered array** instead of modifying original.

```jsx
setCars(c => c.filter((_, i) => i !== index));
```

**Concept:**

- `filter()` returns a new array
- Removes clicked item by index
- React re-renders automatically

---

### 5. Controlled Inputs (React Form Handling)

Each input is controlled by React state.

```jsx
<input type="text" value={carMake} onChange={handleMakeChange} />
```

**Why important:**

- React becomes single source of truth
- UI always matches state
- Easy to reset / validate / manipulate

---

### 6. Rendering Array of Objects in UI

Rendering dynamic list using `map()`:

```jsx
{cars.map((car, index) => (
  <li key={index}>
    {car.year} {car.make} {car.model}
  </li>
))}
```

**Concept learned:**

- Dynamic rendering
- Proper use of `key`
- Accessing object properties inside JSX

---

### 7. Functional State Update Pattern

Using updater function ensures **latest state is used**:

```jsx
setCars(c => [...c, newCar]);
```

**Why use this:**

- State updates are asynchronous
- Prevents stale state bugs
- Safe when state depends on previous state

---