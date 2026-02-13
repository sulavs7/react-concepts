import React from "react";

function Button() {
  let count = 0;
  const handleClick = () => console.log("OUCH!!");

  const handleClick2 = (name) => console.log(`${name} stop clicking me `);

  const handleClick3 = (name) => {
    if (count < 3) {
      count++;
      console.log(`${name} you clicked me ${count} times!`);
    } else {
      console.log(`${name} stop clicking me!!`);
    }
  };

  const handleClick4 = (e) => (e.target.textContent = "ouch!");

  return (
    <>
      <button
        onClick={() => handleClick3("Bro")}
        onDoubleClick={(e) => handleClick4(e)}
      >
        Click me
      </button>
    </>
  );
}

export default Button;
