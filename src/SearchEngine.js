import React from "react";
import "bootstrap/dist/css/bootstrap.css";

export default function SearchEngine() {
  return (
    <form className="SearchEngine">
      <div className="row">
        <div className="col-6">
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Enter a city name"
              autoFocus
            />
          </div>
        </div>
        <div className="col-2">
          <button type="submit" className="btn btn-dark search w-100">
            Search
          </button>
        </div>
        <div className="col-2">
          <button type="submit" className="btn btn-dark w-100">
            Current city
          </button>
        </div>
      </div>
    </form>
  );
}
