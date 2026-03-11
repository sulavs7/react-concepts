import React, { useState, useEffect } from "react";

function MyComponent() {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    console.log("eventListner added");

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  function handleResize() {
    setHeight(window.innerHeight);
    setWidth(window.innerWidth);
  }

  return (
    <>
      <p>window width : {width}px</p>
      <p>window height : {height}px</p>
    </>
  );
}

export default MyComponent;
