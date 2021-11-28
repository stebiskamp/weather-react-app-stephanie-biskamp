import SearchEngine from "./SearchEngine";
import Weather from "./Weather";
import "./App.css";

function App() {
  return (
    <div className="weather-app-wrapper">
      <div className="container">
        <div className="App">
          <SearchEngine />
          <Weather />
        </div>
      </div>
    </div>
  );
}

export default App;
