import React from "react";
import FormatDate from "./FormatDate";
import WeatherIcon from "./WeatherIcon";
export default function WeatherDetails(props) {
  return (
    <div className="WeatherDetails">
      <h1>{props.data.city}</h1>

      <FormatDate date={props.data.date} />
      <p className="text-capitalize">{props.data.description} </p>
      <div className="row">
        <div className="col-6">
          <div className="d-flex">
            <div className="float-left">
              <WeatherIcon code={props.data.icon} size={64} />
            </div>

            <div className="float-left">
              <span className="temperature">
                {Math.round(props.data.temperature)}
              </span>
              <span className="unit">C</span>
            </div>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Feels like :{Math.round(props.data.feels_like)}</li>
            <li>Humidity :{props.data.humidity}%</li>
            <li>Wind: {Math.round(props.data.wind)}km/hr</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
