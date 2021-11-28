import SearchEngine from "./SearchEngine";
import Weather from "./Weather";
import Forecast from "./Forecast";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <div className="weather-app-wrapper">
      <div className="container">
        <div className="App">
          <SearchEngine />
          <Weather />
          <div className="row">
            <Forecast day="Sun" tempMax={7} tempMin={3} />
            <Forecast day="Mon" tempMax={9} tempMin={0} />
            <Forecast day="Tue" tempMax={11} tempMin={4} />
            <Forecast day="Wed" tempMax={7} tempMin={1} />
            <Forecast day="Thu" tempMax={8} tempMin={4} />
          </div>
        </div>
      </div>
      <footer>
        <a
          href="https://github.com/stebiskamp/Weather-Project-Stebiskamp"
          target="_blank"
          rel="noreferrer"
        >
          Open-source coded
        </a>{" "}
        by Stephanie Biskamp
      </footer>
    </div>
  );
}

export default App;
