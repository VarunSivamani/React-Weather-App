import React, { useState } from "react";
import CityComponent from "./components/CityComponent";
import WeatherComponent from "./components/WeatherComponent";
import axios from "axios";

import "./App.css";

const API_KEY = "fe4feefa8543e06d4f3c66d92c61b69c";

export const WeatherIcons = {
  "01d": "/icons/sunny.svg",
  "01n": "/icons/night.svg",
  "02d": "/icons/day.svg",
  "02n": "/icons/cloudy-night.svg",
  "03d": "/icons/cloudy.svg",
  "03n": "/icons/cloudy.svg",
  "04d": "/icons/perfect-day.svg",
  "04n": "/icons/cloudy-night.svg",
  "09d": "/icons/rain.svg",
  "09n": "/icons/rain-night.svg",
  "10d": "/icons/rain.svg",
  "10n": "/icons/rain-night.svg",
  "11d": "/icons/storm.svg",
  "11n": "/icons/storm.svg",
  "50d": "/icons/fog.svg",
  "50n": "/icons/fog-night.svg",
};

const App = () => {
  const [city, updateCity] = useState("");
  const [weather, updateWeather] = useState("");
  const fetchWeather = async (e) => {
    e.preventDefault();
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
    );
    updateWeather(response.data);
    // console.log(response.data);
  };

  return (
    <div
      className={
        typeof weather.main !== "undefined"
          ? weather.main.temp < 16
            ? "cold-container"
            : "warm-container"
          : "container"
      }
    >
      {city && weather ? (
        <WeatherComponent weather={weather} city={city} />
      ) : (
        <CityComponent updateCity={updateCity} fetchWeather={fetchWeather} />
      )}
    </div>
  );
};

export default App;
