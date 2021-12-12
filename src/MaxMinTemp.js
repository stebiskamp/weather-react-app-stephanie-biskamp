import React from "react";

export default function MaxMinTemp(props) {
  function maxTemp() {
    if (props.passUnits === "celsius") {
      let temp = Math.round(props.max);
      return `${temp}°C`;
    } else {
      let temp = Math.round((props.max * 9) / 5 + 32);
      return `${temp}°F`;
    }
  }
  function minTemp() {
    if (props.passUnits === "celsius") {
      let temp = Math.round(props.min);
      return `${temp}°C`;
    } else {
      let temp = Math.round((props.min * 9) / 5 + 32);
      return `${temp}°F`;
    }
  }

  return (
    <h3>
      Max {maxTemp()} <i className="fas fa-temperature-high"></i> / Min{" "}
      {minTemp()} <i className="fas fa-temperature-low"></i>
    </h3>
  );
}
