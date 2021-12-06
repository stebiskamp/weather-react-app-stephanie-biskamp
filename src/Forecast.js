import React from "react";

export default function Forecast(props) {
  return (
    <div className="col Forecast">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{props.day}</h5>
          <i className="fas fa-sun"></i>
          <p className="card-text">
            {props.tempMax} / {props.tempMin} °C
          </p>
        </div>
      </div>
    </div>
  );
}
