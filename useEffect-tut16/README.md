# React `useEffect` Hook

## What is `useEffect`?

`useEffect` lets you run **side effects** after a component renders — things like updating the document title, fetching data, or setting up subscriptions.

```js
useEffect(function, [dependencies])
```

---

## The 3 Behaviors

### 1. Runs after every re-render

```js
useEffect(() => {
  document.title = "counting program";
});
```

No dependency array → runs after **every** render.

---

### 2. Runs only on mount

```js
useEffect(() => {
  document.title = `count: ${count}`;
}, []);
```

Empty array `[]` → runs **once** when the component mounts, never again.

---

### 3. Runs on mount + when a value changes

```js
useEffect(() => {
  document.title = `count: ${count} ${color}`;
}, [count, color]);
```

Values in array → runs on mount **and** whenever `count` or `color` changes.

---

## Why Use `useEffect`?

When you see a `useEffect`, you immediately know **when** that code runs — it makes timing explicit and keeps your component organized.

---

## `useState` recap (used alongside `useEffect`)

```js
const [count, setCount] = useState(0);
const [color, setColor] = useState("green");

setCount((c) => c + 1); // functional update
setColor((c) => (c === "green" ? "red" : "green"));
```

Use the **functional form** of the setter when the new state depends on the old state.

---

## Cleanup (to remember)

`useEffect` can return a cleanup function — runs before the next effect or on unmount.

```js
useEffect(() => {
  // setup
  return () => {
    // cleanup
  };
}, []);
```
