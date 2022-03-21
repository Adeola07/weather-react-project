import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <input type="search" placeholder=" Enter city here" />
        <input type="submit" value="Search" />
      </form>
      <h1>Sheffield</h1>
      <p>Sun 20.03.22</p>
      <div className="row">
        <div className="col-6">
          <h2>8</h2>
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
