import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  function handleIncrement(event) {
    //we couldnt trigger set count multiple times like this
    //ie. no multiple state updates
    //to perform multiple state update we use updater function
    // setCount(count + 1);
    // setCount(count + 1);
    // setCount(count + 1);

    //updater function
    setCount((c) => c + 1);
    setCount((c) => c + 1);
    setCount((c) => c + 1);
  }
  function handleDecrement() {
    setCount((c) => c - 1);
    setCount((c) => c - 1);
    setCount((c) => c - 1);
  }
  function handleReset() {
    setCount(0);//no need of the updater function here as present and past value is not related 
  }

  return (
    <div className="count-display-container">
      <h1 className="counter-text">COUNTER</h1>
      <h1 className="count-display">{count}</h1>

      <div className="button-container">
        <button
          className="counter-buttons"
          value={count}
          onClick={handleDecrement}
        >
          Decrement
        </button>
        <button className="counter-buttons" value={count} onClick={handleReset}>
          Reset
        </button>
        <button
          className="counter-buttons"
          value={count}
          onClick={handleIncrement}
        >
          Increment
        </button>
      </div>
    </div>
  );
}

export default Counter;
