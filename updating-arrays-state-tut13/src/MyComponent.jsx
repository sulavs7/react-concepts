import { useState } from "react";

function MyComponent() {
  const [fruits, setFruits] = useState(["Apple", "Banana", "Orange"]);

  function handleAddFruit() {
    const newFruit = document.getElementById("add-fruit").value;
    document.getElementById("add-fruit").value = "";
    setFruits((f) => [...f, newFruit]);
  }

  function handleRemoveFruit(index) {
    setFruits(
      fruits.filter((_, indyex) => {
        return index !== indyex;
      }),
    );
  }

  return (
    <div>
      <h1>List of Fruits</h1>
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index} onClick={() => handleRemoveFruit(index)}>
            {fruit}
          </li>
        ))}
      </ul>

      <input id="add-fruit" type="text" placeholder="Enter a fruit " />
      <button onClick={handleAddFruit}>Add</button>
    </div>
  );
}

export default MyComponent;
