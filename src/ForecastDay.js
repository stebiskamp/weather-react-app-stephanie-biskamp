import React from "react";
import Icons from "./Icons";

export default function ForecastDay(props) {
  function maxTemp() {
    if (props.passUnits === "celsius") {
      let temp = Math.round(props.data.temp.max);
      return `${temp}`;
    } else {
      let temp = Math.round((props.data.temp.max * 9) / 5 + 32);
      return `${temp}`;
    }
  }
  function minTemp() {
    if (props.passUnits === "celsius") {
      let temp = Math.round(props.data.temp.min);
      return `${temp}°C`;
    } else {
      let temp = Math.round((props.data.temp.min * 9) / 5 + 32);
      return `${temp}°F`;
    }
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let day = days[date.getDay()];

    return day;
  }

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{day()}</h5>
        <Icons icon={props.data.weather[0].icon} />
        <p className="card-text">
          {" "}
          {maxTemp()} / {minTemp()}
        </p>
      </div>
    </div>
  );
}
