import React from "react";
import "./App.css";
import Weather from "./Weather";
import "./index.css";
function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Sheffield" />
        <footer>
          <a href="https://github.com/Adeola07/weather-react-project  target=_blank">
            Open-source code
          </a>{" "}
          by Adeola Ejalonibu{" "}
        </footer>
      </div>
    </div>
  );
}

export default App;
