import React from "react";
import FormattedDate from "./FormattedDate";
import Icons from "./Icons";
import Temperature from "./Temperature";
import MaxMinTemp from "./MaxMinTemp";

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
        <div className="col-6 WeatherInfo">
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
                Now is{" "}
                <Temperature
                  celsius={props.weather.temperature}
                  setPassUnits={props.setPassUnits}
                  passUnits={props.passUnits}
                />{" "}
                - {props.weather.description}{" "}
                <Icons icon={props.weather.icon} />
              </h3>
            </div>
          </div>
          <div className="col-12">
            <MaxMinTemp
              max={props.weather.tempmax}
              min={props.weather.tempmin}
              passUnits={props.passUnits}
            />
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
