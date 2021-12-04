import React from "react";

export default function Icons(props) {
  const iconsList = {
    "01d": "fas fa-sun",

    "02d": "fas fa-cloud-sun",

    "01n": "fas fa-moon",

    "02n": "fas fa-cloud-moon",

    "03d": "fas fa-cloud",

    "04d": "fas fa-cloud",

    "03n": "fas fa-cloud",

    "04n": "fas fa-cloud",

    "09d": "fas fa-cloud-showers-heavy",

    "09n": "fas fa-cloud-showers-heavy",

    "10d": "fas fa-cloud-sun-rain",

    "10n": "fas fa-cloud-moon-rain",

    "11d": "fas fa-bolt",

    "11n": "fas fa-bolt",

    "13d": "fas fa-snowman",

    "13n": "fas fa-snowman",

    "50d": "fas fa-smog",

    "50n": "fas fa-smog",
  };

  return <i className={iconsList[props.icon]}></i>;
}
