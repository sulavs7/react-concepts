import React, { useState } from "react";

function Updater() {
  const [car, setCar] = useState({
    name: "merceedes",
    year: 2024,
    color: "black",
  });

  function handleYearChange(event) {
    // setCar({ year: 2025 }); //this replaced the complete object with year: 2025 so it only displays 'You selected 2025 in color.'
    setCar((c) => ({ ...c, year: event.target.value })); //spread all of current properties of car and add year:2025 .{year:2024,car:merceedes,color:black,year:2025 } from this obj js will take the latest year without duplication
    //using updater function car=> {} expects multiple  lines so using parenthesins which allows to create an object
  }

  function handleNameChange(event) {
    setCar((c) => ({ ...c, name: event.target.value })); //...c is spread operator
  }

  function handleColorChange(event) {
    setCar((c) => ({ ...c, color: event.target.value }));
  }

  return (
    <div>
      <p>
        You selected {car.year} {car.name} in {car.color} color.
      </p>

      <input type="number" value={car.year} onChange={handleYearChange} />
      <input type="text" value={car.name} onChange={handleNameChange} />
      <input type="text" value={car.color} onChange={handleColorChange} />
    </div>
  );
}

export default Updater;
