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
          <a
            href="https://github.com/Adeola07/weather-react-project"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open-source code
          </a>{" "}
          by{" "}
          <a
            href="https://laughing-boyd-4e1917.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Adeola Ejalonibu
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
