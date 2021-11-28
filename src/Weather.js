import React from "react";
import "bootstrap/dist/css/bootstrap.css";

export default function Weather() {
  return (
    <div className="row">
      <div className="col-6">
        <h1 className="header">Berlin</h1>
      </div>
      <div className="col-6">
        <div className="row">
          <div className="col-12">
            <h3 className="current-day">
              <span> Saturday, 27 November 2021 </span>15:00h
            </h3>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <h3>
              Currently <span>3</span> °C /
              <span className="description"> Clouds</span>
              <i className="fas fa-sun"></i>
            </h3>
          </div>
        </div>
        <div className="col-12">
          <h3>
            <span>7</span> °C
            <i className="fas fa-temperature-high"></i> / <span>1</span> °C
            <i className="fas fa-temperature-low"></i>
          </h3>
        </div>
        <div className="col-12">
          <h3>
            Humidity: <span>50</span>% / Wind: <span>8</span>
            km/h
          </h3>
        </div>
      </div>
    </div>
  );
}
