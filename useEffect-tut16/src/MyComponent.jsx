import React, { useState, useEffect } from "react";

// change the sidecode when value changes or with no value when there is no dependencies or value passed

// useEffect (function , [dependencies])

// 1. useEffect(()=>{}) //runs after every rerender
// 2. useeffect (()=>{},[]) //runs only on mount
// 3. useEffect(()=>{},[value]) //runs on mount+when value changes

function MyComponent() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("green");

  ////runs after every render
  //   useEffect(() => {
  //     document.title = "conting program";
  //   });

  //   // runs only on mount and not ever again
  //   useEffect(() => {
  //     document.title = `count : ${count}`;
  //   }, []);

  //runs on mount + when the value changes
  useEffect(() => {
    document.title = `count : ${count} ${color}`;
  }, [count, color]); //execute the code when the values changes

  function addCount() {
    setCount((c) => c + 1);
  }
  function subCount() {
    setCount((c) => c - 1);
  }
  function changeColor() {
    setColor((c) => (c === "green" ? "red" : "green"));
  }
  return (
    <>
      <p style={{ color: color }}>Count:{count} </p>
      <button onClick={addCount}>Add</button>
      <button onClick={subCount}>Subtract</button>
      <button onClick={changeColor}>Change Color</button>
    </>
  );
}

export default MyComponent;


//why we need useEffect ?
// make the code organized - when we see the useeffect code we can say when this  ode exactly  runs .


//we can perform some cleanup codes as well 