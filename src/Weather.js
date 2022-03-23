import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import axios from "axios";
import FormatDate from "./FormatDate";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function showResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      date: new Date(response.data.dt * 1000),
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      description: response.data.weather[0].description,
      feels_like: response.data.main.feels_like,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input type="search" placeholder=" Enter city here" />
            </div>
            <div className="col-3">
              <input type="submit" value="Search" />
            </div>
          </div>
        </form>
        <h1>Sheffield</h1>

        <FormatDate date={weatherData.date} />
        <p className="text-capitalize">{weatherData.description} </p>
        <div className="row">
          <div className="col-6">
            <div className="d-flex">
              <img
                src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
                alt="Sunny"
                className="float-left"
              />
              <div className="float-left">
                <span className="temperature">
                  {Math.round(weatherData.temperature)}
                </span>
                <span className="unit">C</span>
              </div>
            </div>
          </div>
          <div className="col-6">
            <ul>
              <li>Feels like :{Math.round(weatherData.feels_like)}</li>
              <li>Humidity :{weatherData.humidity}%</li>
              <li>Wind: {weatherData.wind}km/hr</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "ce11c2b5d5b0cf5bfb3d822d9d4e493c";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showResponse);
  }
  return "Loading";
}
