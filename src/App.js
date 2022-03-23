import React from "react";
import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Sheffield" />
        <footer></footer>
      </div>
    </div>
  );
}

export default App;
