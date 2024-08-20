import React, { useState } from "react";
import axios from "axios";

function Weatherapp() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  const fetchweatherData = async () => {
    if (city.trim()) {
      try {
        const apiKey = "enter api key";
        const response = await axios.get("enter api");
        setWeatherData(response.data);
        setError(null);
      } catch (error) {
        setWeatherData(null);
        setError("Please try again");
      }
    }
  };

  return (
    <div>
      <h1> Weather App</h1>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city name"
      />

      <button onClick={fetchweatherData}>Get Weather Details</button>

      {weatherData && (
        <div>
          <h2>{weatherData.name}</h2>
          <p>{weatherData.weather[0].description}</p>
        </div>
      )}
    </div>
  );
}
export default Weatherapp;
