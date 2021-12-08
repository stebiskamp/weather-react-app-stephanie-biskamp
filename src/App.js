import SearchEngine from "./SearchEngine";

import "./App.css";

function App() {
  return (
    <div className="weather-app-wrapper">
      <div className="container">
        <div className="App">
          <SearchEngine defaultCity="Berlin" />
        </div>
      </div>
      <footer>
        <a
          href="https://github.com/stebiskamp/weather-react-app-stephanie-biskamp"
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
