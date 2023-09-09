import React, { useState } from "react";
import "./Weather.css";
import Search from "../img/search.png";
import Clear from "../img/clear.png";
import Cloud from "../img/cloud.png";
import Drizzle from "../img/drizzle.png";
import Rain from "../img/rain.png";
import Snow from "../img/snow.png";
import Wind from "../img/wind.png";
import Hummidity from "../img/humidity.png";

function Weather() {
  const api_key = "77c6872611a91d9bbe609f71d525f4f0";

  const [icon, setIcon] = useState(Cloud);

  const SearchBtn = async () => {
    const element = document.getElementsByClassName("cityInput");
    if (element[0].value === "") {
      alert("Please enter a city name!");
      return 0;
    }
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`;

    let response = await fetch(url);
    let data = await response.json();
    console.log("data: ", data);

    const humidity = document.getElementsByClassName("humidity-percent");
    const wind = document.getElementsByClassName("wind-percent");
    const temperature = document.getElementsByClassName("weather-temp");
    const location = document.getElementsByClassName("weather-location");

    humidity[0].innerHTML = data.main.humidity + " %";
    wind[0].innerHTML = Math.floor(data.wind.speed) + "km/h";
    temperature[0].innerHTML = Math.floor(data.main.temp) + "℃";
    location[0].innerHTML = data.name;

    if (data.weather[0].icon === "01d" || data.weather[0].icon === "01n") {
      setIcon(Clear);
    } else if (
      data.weather[0].icon === "02d" ||
      data.weather[0].icon === "02n"
    ) {
      setIcon(Cloud);
    } else if (
      data.weather[0].icon === "03d" ||
      data.weather[0].icon === "03n"
    ) {
      setIcon(Drizzle);
    } else if (
      data.weather[0].icon === "04d" ||
      data.weather[0].icon === "04n"
    ) {
      setIcon(Drizzle);
    } else if (
      data.weather[0].icon === "09d" ||
      data.weather[0].icon === "09n"
    ) {
      setIcon(Rain);
    } else if (
      data.weather[0].icon === "10d" ||
      data.weather[0].icon === "10n"
    ) {
      setIcon(Rain);
    } else if (
      data.weather[0].icon === "13d" ||
      data.weather[0].icon === "13n"
    ) {
      setIcon(Snow);
    } else {
      setIcon(Cloud);
    }
  };

  return (
    <div className="container">
      <div className="topBar">
        <input type="text" className="cityInput" placeholder="enter a city" />
        <button className="searchIcon" onClick={() => SearchBtn()}>
          <img src={Search} alt="" />
        </button>
      </div>
      <div className="weather-image">
        <img src={icon} alt="" />
      </div>
      <div className="weather-temp">24℃</div>
      <div className="weather-location">London</div>
      <div className="data-container">
        <div className="element">
          <img src={Hummidity} alt="" className="icon" />
          <div className="data">
            <div className="humidity-percent">64%</div>
            <div className="text">Humidity</div>
          </div>
        </div>
        <div className="element">
          <img src={Wind} alt="" className="icon" />
          <div className="data">
            <div className="wind-percent">18 km/h</div>
            <div className="text">Wind Speed</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Weather;
