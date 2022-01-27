import React from "react";
import "../css/CityComponent.css";

const CityComponent = (props) => {
  const { updateCity, fetchWeather } = props;

  return (
    <div className="city-main">
      <div className="head">
        <h1>React Weather App</h1>
      </div>
      <div className="text">
        <h2 className="hWeather">Find Weather of your City!</h2>
      </div>
      <form className="form-input" onSubmit={fetchWeather}>
        <div className="form-search">
          <div className="ui action input">
            <input
              type="text"
              placeholder="Search City..."
              onChange={(e) => updateCity(e.target.value)}
            />
            <button className="ui icon button">
              <i className="search icon" />
            </button>
          </div>
        </div>
      </form>
      <div className="space"></div>
    </div>
  );
};

export default CityComponent;
