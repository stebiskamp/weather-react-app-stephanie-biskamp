import React from "react";

export default function Weather(props) {
  return (
    <div className="Weather">
      <div className="row">
        <div className="col-6">
          <h1 className="header">{props.weather.name}</h1>
        </div>
        <div className="col-6">
          <div className="row">
            <div className="col-12">
              <h3 className="current-day">Sat, 27 Nov 2021 / 15:00h</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <h3>
                Currently {props.weather.temperature} °C / {props.weather.icon}
                <i className="fas fa-cloud"></i>
              </h3>
            </div>
          </div>
          <div className="col-12">
            <h3>
              {props.weather.tempmax}°C{" "}
              <i className="fas fa-temperature-high"></i> /{" "}
              {props.weather.tempmin}
              °C <i className="fas fa-temperature-low"></i>
            </h3>
          </div>
          <div className="col-12">
            <h3>
              Humidity: {props.weather.humidity}% / Wind: {props.weather.wind}
              km/h
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
