import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

export default function Weather() {
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
      <p>Sun 20.03.22</p>
      <div className="row">
        <div className="col-6">
          <div className="d-flex">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
              alt="Sunny"
              className="float-left"
            />
            <div className="float-left">
              <span className="temperature">8</span>
              <span className="unit">C</span>
            </div>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation :</li>
            <li>Humidity :</li>
            <li>Feels like 2</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
