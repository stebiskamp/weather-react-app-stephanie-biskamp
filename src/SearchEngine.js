import React, { useState } from "react";
import axios from "axios";
import Weather from "./Weather";
import Forecast from "./Forecast";

export default function SearchEngine(props) {
  const [weather, setWeather] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeather({
      ready: true,
      name: response.data.name,
      date: response.data.timezone,
      temperature: Math.round(response.data.main.temp),
      tempmax: Math.round(response.data.main.temp_max),
      tempmin: Math.round(response.data.main.temp_min),
      humidity: response.data.main.humidity,
      description: response.data.weather[0].main,
      icon: response.data.weather[0].icon,
      wind: Math.round(response.data.wind.speed),
      coordinates: response.data.coord,
    });
  }

  function handleClick() {
    navigator.geolocation.getCurrentPosition(showPosition);
  }

  function showPosition(position) {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    let apiKey = "53f3bc1f5d348c44be3e3754c7185573";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function search() {
    const apiKey = "53f3bc1f5d348c44be3e3754c7185573";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  const [passUnits, setPassUnits] = useState("celsius");

  let form = (
    <form className="SearchEngine" onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-6">
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Enter a city name"
              autoFocus
              onChange={handleCityChange}
            />
          </div>
        </div>
        <div className="col-2">
          <button type="submit" className="btn btn-light search w-100">
            Search
          </button>
        </div>
        <div className="col-2">
          <button
            type="submit"
            className="btn btn-light w-100"
            onClick={handleClick}
          >
            Current city
          </button>
        </div>
      </div>
    </form>
  );

  if (weather.ready) {
    return (
      <div>
        {form}
        <Weather
          weather={weather}
          passUnits={passUnits}
          setPassUnits={setPassUnits}
        />
        <div className="row">
          <Forecast
            day="Sun"
            tempMax={7}
            tempMin={3}
            coordinates={weather.coordinates}
            passUnits={passUnits}
          />
        </div>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
