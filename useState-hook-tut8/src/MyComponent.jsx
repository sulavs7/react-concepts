import React, { useState } from "react";

function MyComponent() {
  const [name, setName] = useState("guest"); //initial state

  const [age, setAge] = useState(0);

  const [isEmployed, setIsEmployed] = useState(false);

  const updateName = () => {
    setName("spongebob");
  };

  const incrementAge = () => {
    setAge(age + 1);
  };

  const toggleEmployedStatus = () => {
    console.log(isEmployed);
    console.log("clicked");
    setIsEmployed((prev) => !prev);
  };

  return (
    <div>
      <p>Name: {name}</p>
      <button onClick={updateName}>Set Name</button>

      <p>age: {age}</p>
      <button onClick={incrementAge}>increment age</button>

      <p>is Employed: {isEmployed ? "yes" : "no"}</p>
      <button onClick={toggleEmployedStatus}>Toggle Status</button>
    </div>
  );
}

export default MyComponent;
