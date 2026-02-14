# React State Updater & Object State Handling

This project demonstrates how **React state works with objects**, why direct updates can replace the whole object, and how to correctly update state using the **updater function + spread operator**.

---

## Key Learnings and concepts

---

### 1. State Can Store Objects

React `useState` can store complex data like objects.

```jsx
const [car, setCar] = useState({
  name: "mercedes",
  year: 2024,
  color: "black",
});
```

State contains multiple properties inside a single object.

### 2. State Replacement Behavior

React does NOT merge objects automatically.
Updating state replaces the entire object.

❌ Wrong:

setCar({ year: 2025 });

Result → other properties (name, color) are lost.Only year 2025 is left on the object.

### 3. Spread Operator (...) Preserves Existing State

The spread operator copies existing properties before updating.

setCar(c => ({ ...c, name: "BMW" }));

Without spread → entire object replaced
With spread → only one field updated

### 4. Using Updater Function for Safe Updates

Updater function gives latest state value and avoids stale state issues.

setCar(c => ({ ...c, year: 2025 }));

Why this works:

c → latest state

...c → copies all existing properties (spread operator)

year: 2025 → updates only the required field

### 5. Updating State from Input Fields

React state updates dynamically from user input.

```jsx
function handleColorChange(e) {
  setCar((c) => ({ ...c, color: e.target.value }));
}
```

Key idea:

- Read value from input

- Update only that specific property

- Preserve rest of object

### 6. Returning Object from Arrow Function

When returning an object from arrow function, wrap in parentheses.

setCar(c => ({ ...c, year: 2025 }));

Without parentheses → treated as function block, not object.

### 7. React State is Immutable

Never mutate state directly

Avoid:

car.year = 2025;

Always create new object ✔

setCar(c => ({ ...c, year: 2025 }));
