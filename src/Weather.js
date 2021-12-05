import React from "react";
import FormattedDate from "./FormattedDate";
import Icons from "./Icons";
import Temperature from "./Temperature";

export default function Weather(props) {
  let d = new Date();
  let localTime = d.getTime();
  let localOffset = d.getTimezoneOffset() * 60000;
  let utc = localTime + localOffset;
  let nDate = new Date(utc + 1000 * props.weather.date);

  return (
    <div className="Weather">
      <div className="row">
        <div className="col-6">
          <h1 className="header">{props.weather.name}</h1>
        </div>
        <div className="col-6">
          <div className="row">
            <div className="col-12">
              <h3 className="current-day">
                <FormattedDate date={nDate} />
              </h3>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <h3>
                Now is <Temperature celsius={props.weather.temperature} /> /{" "}
                {props.weather.description} <Icons icon={props.weather.icon} />
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
