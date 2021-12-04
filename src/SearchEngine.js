import React, { useState } from "react";
import Weather from "./Weather";
import axios from "axios";

export default function SearchEngine() {
  const [weather, setWeather] = useState({ ready: false });

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
    });
  }

  let form = (
    <form className="SearchEngine">
      <div className="row">
        <div className="col-6">
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Enter a city name"
              autoFocus
            />
          </div>
        </div>
        <div className="col-2">
          <button type="submit" className="btn btn-dark search w-100">
            Search
          </button>
        </div>
        <div className="col-2">
          <button type="submit" className="btn btn-dark w-100">
            Current city
          </button>
        </div>
      </div>
    </form>
  );

  if (weather.ready) {
    return (
      <>
        {" "}
        {form}
        <Weather weather={weather} />{" "}
      </>
    );
  } else {
    const apiKey = "53f3bc1f5d348c44be3e3754c7185573";
    const city = "Berlin";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return "Loading...";
  }
}
