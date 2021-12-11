import React from "react";
import Icons from "./Icons";

export default function ForecastDay(props) {
  function maxTemp() {
    let maxTemp = Math.round(props.data.temp.max);
    return `${maxTemp}`;
  }

  function minTemp() {
    let minTemp = Math.round(props.data.temp.min);
    return `${minTemp}`;
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
          {maxTemp()} / {minTemp()}°C
        </p>
      </div>
    </div>
  );
}
