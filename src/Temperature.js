import React, { useState } from "react";
import "./App.css";

export default function Temperature(props) {
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
        {props.celsius}{" "}
        <a href="/" className="inactive">
          °C{" "}
        </a>{" "}
        /{" "}
        <a className="active" href="/" onClick={showFahrenheit}>
          °F
        </a>
      </span>
    );
  } else {
    let fahrenheit = Math.round((props.celsius * 9) / 5 + 32);
    return (
      <span className="Temperature">
        {" "}
        {fahrenheit}{" "}
        <a href="/" className="inactive">
          °F{" "}
        </a>{" "}
        /{" "}
        <a className="active" href="/" onClick={showCelsius}>
          °C
        </a>
      </span>
    );
  }
}
