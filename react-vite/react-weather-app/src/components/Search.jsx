import React, { useEffect, useState } from "react";
import "./Search.css";

const Search = () => {
  const [city, setCity] = useState("");
  const [submit, setSubmit] = useState(false); // Used to trigger the fetch and toggle visibility
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);

  const api_key = "3c808fdef7041e47248ae5fb3ae82401";
  const iconUrl = "https://openweathermap.org/img/wn/";

  const handleInputChange = (e) => {
    e.preventDefault();
    setCity(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setSubmit((current) => !current); // Toggle the submit state
    if (!submit) {
      // Only set loading if we are going to fetch data
      setLoading(true);
    }
  };

  useEffect(() => {
    if (submit && city) {
      const fetchData = async () => {
        try {
          const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`
          );
          if (!response.ok) {
            throw new Error("City not found. Please try again.");
          }
          const data = await response.json();
          setWeatherData(data);
        } catch (error) {
          console.error(error.message);
        }
        setLoading(false);
      };

      fetchData();
    } else {
      setWeatherData(null); // Clear previous weather data if submit is toggled off
    }
  }, [submit, city]); // Depend on submit and city

  return (
    <div className="search">
      <input
        type="text"
        placeholder="Enter city name..."
        value={city}
        onChange={handleInputChange}
      />
      <button onClick={submitHandler}>Get Weather</button>
      <div>
        {submit && !loading && weatherData && (
          <div className="data">
            <h2>
              {weatherData.name}, {weatherData.sys.country}
            </h2>
            <img
              src={`${iconUrl}${weatherData.weather[0].icon}@2x.png`}
              alt="Weather Icon"
            />
            <h3>{weatherData.weather[0].description}</h3>
            <p>Temperature: {weatherData.main.temp}°C </p>
            <p>Humidity: {weatherData.main.humidity}%</p>
            <p>Wind Speed: {weatherData.wind.speed} m/s</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
