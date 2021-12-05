import React, { useState } from "react";

export default function MaxAndMinTemp(props) {
  const [unit, setUnit] = useState("celsius");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <span className="Temperature">
        {" "}
        {props.celsius} <a href="/">°C </a> /{" "}
        <a href="/" onClick={showFahrenheit}>
          °F
        </a>
      </span>
    );
  } else {
    let fahrenheit = Math.round((props.celsius * 9) / 5 + 32);
    return (
      <span className="Temperature">
        {" "}
        {fahrenheit} <a href="/">°F </a> /{" "}
        <a href="/" onClick={showCelsius}>
          °C
        </a>
      </span>
    );
  }
}
