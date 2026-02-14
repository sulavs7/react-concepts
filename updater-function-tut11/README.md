## React Counter — Core Concepts Learned

This counter project demonstrates important React concepts related to **state updates, batching, and updater functions**.

---

## 1. State in React

React uses **state** to store dynamic values that change over time.

When state changes → React **re-renders the component → UI updates automatically**.

```jsx
const [count, setCount] = useState(0);
```

## 2. React State Updates Are Asynchronous

React does not update state immediately.
Multiple state updates inside the same function are batched together.

```jsx
setCount(count + 1);
setCount(count + 1);
setCount(count + 1);
```

This results in only +1, not +3.

- Why?

Because all updates use the same old value of count.

## 3. Updater Function (Functional Update)

To correctly perform multiple updates, use the updater function.

```jsx
setCount((prev) => prev + 1);
```

React now uses the latest updated value for each call.

Example:

```jsx
setCount((c) => c + 1);
setCount((c) => c + 1);
setCount((c) => c + 1);
```

Result → count + 3

## 4. When to Use Updater Function

Use functional update whenever new state depends on previous state:

- Counters

- Toggles

- Increment / Decrement

- Queued updates

- Multiple state updates in one function

## 5. Decrement Using Updater Function

Updater works the same for decreasing:

```jsx
setCount((c) => c - 1);
```

Multiple calls correctly stack:

```jsx
setCount((c) => c - 1);
setCount((c) => c - 1);
setCount((c) => c - 1);
```

## 6. Reset Does NOT Need Updater Function

Updater function is only required when new value depends on old value.

For reset, it does not:

```jsx
setCount(0);
```

## 7. React Batching

- React groups multiple state updates into one render cycle for performance.

- Prevents unnecessary re-renders

- Improves performance

- Requires updater function for dependent updates
