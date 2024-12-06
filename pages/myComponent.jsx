import { set } from "date-fns";
import React, { useState } from "react";

function myComponent() {
  const [car, setCar] = useState({
    year: 2024,
    make: "ford",
    model: "mustang",
  });

  function handleYearChange(event) {
    setCar((c) => ({ ...c, year: event.target.value }));
  }
  function handleMakeChange(event) {
    setCar((c) => ({ ...c, make: event.target.value }));
  }
  function handleModelChange(event) {
    setCar((c) => ({ ...c, model: event.target.value }));
  }

  return (
    <div className="">
      <p>
        Your favourite car is: {car.year} {car.make} {car.model}{" "}
      </p>
      <input
        className="border border-black"
        type="number"
        value={car.year}
        onChange={handleYearChange}
      />{" "}
      <br />
      <input
        className="border border-black"
        type="text"
        value={car.make}
        onChange={handleMakeChange}
      />{" "}
      <br />
      <input
        className="border border-black"
        type="text"
        value={car.model}
        onChange={handleModelChange}
      />{" "}
      <br />
    </div>
  );
}

export default myComponent;
