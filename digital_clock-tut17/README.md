# `useEffect` Cleanup — Digital Clock Example

vercel link : https://digital-clockk-ecru.vercel.app/

## Concepts Learned

### `useEffect` with Cleanup

Some side effects need to be **stopped** when the component unmounts (e.g. timers, subscriptions). You do this by returning a cleanup function from `useEffect`.

```js
useEffect(() => {
  const intervalId = setInterval(() => {
    setTime(new Date());
  }, 1000);

  return () => {
    clearInterval(intervalId); // runs on unmount
  };
}, []); // empty array = runs once on mount
```

- `setInterval` starts a repeating 1s timer → updates the clock
- The returned function clears the interval when the component is removed from the DOM
- Without cleanup → **memory leak** (timer keeps running even after component is gone)

---

### `useState` with an Object as Initial Value

```js
const [time, setTime] = useState(new Date());
```

Initial state doesn't have to be a primitive — here it's a `Date` object.

---

### 12-Hour Format Logic

```js
const meridiem = hours >= 12 ? "PM" : "AM";
hours = hours % 12 || 12; // converts 0 (midnight) → 12
```

`|| 12` handles the edge case where `0 % 12 = 0` — midnight should display as `12`, not `0`.

---

### Padding single digits with `padZero`

```js
function padZero(number) {
  return (number < 10 ? "0" : "") + number;
}
```

Ensures times like `9:5:3` render as `09:05:03`.
