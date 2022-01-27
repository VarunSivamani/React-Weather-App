import React from "react";
import "../css/WeatherComponent.css";
import { WeatherIcons } from "../App";

const WeatherComponent = (props) => {
  const { weather } = props;

  let temp = Math.round(weather?.main?.temp);

  return (
    <div className="weather-main">
      <div className="situation-box">
        <div className="situation">{weather?.weather[0].main}</div>
      </div>
      <div className="pics">
        <img src={WeatherIcons[weather?.weather[0].icon]} alt="pic" />
      </div>
      <div className="temp-box">
        <div className="temperature">
          {temp}
          &deg;
        </div>
      </div>
      <div className="location-box">
        <div className="location">{`${weather?.name} | ${weather?.sys?.country}`}</div>
      </div>

      <div className="components">
        <div className="wind">
          <div className="comp">Wind Speed</div>
          <div className="val">{weather?.wind?.speed}m/s</div>
        </div>

        <div className="humidity">
          <div className="comp">Humidity</div>
          <div className="val">{weather?.main?.humidity}%</div>
        </div>
      </div>
    </div>
  );
};

export default WeatherComponent;
