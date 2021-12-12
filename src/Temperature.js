import React from "react";

export default function Temperature(props) {
  const showCelsius = (event) => {
    event.preventDefault();
    props.setPassUnits("celsius");
  };

  const showFahrenheit = (event) => {
    event.preventDefault();
    props.setPassUnits("fahrenheit");
  };

  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }

  if (props.passUnits === "celsius") {
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
    return (
      <span className="Temperature">
        {" "}
        {Math.round(fahrenheit())}{" "}
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
