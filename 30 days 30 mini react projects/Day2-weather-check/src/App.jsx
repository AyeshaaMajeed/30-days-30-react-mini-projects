import React from "react";
import { useState } from "react";
import Weather from "./components/Weather";

const API_KEY = "05efa1a8b6720c8cabc590a018f97596";

const App = () => {
  const [city, setCity] = useState("");
  const [error, setError] = useState(null);
  const [weather, setWeather] = useState(null);

  const fetchWeather = async (city) => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      if (!response.ok) {
        throw new Error("City not found");
      }

      const data = await response.json();
      setWeather(data);
      setError(null);
    } catch (error) {
      setError("City not found.Please enter a valid city");
      setWeather(null);
    }
  };

  const handleSubmission = (e) => {
    e.preventDefault();
    if (city.trim() !== "") {
      fetchWeather(city);
    }
  };

  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-gradient-to-t from-gray-900 to-gray-400">
      <header className="w-full mx-auto max-w-2xl text-center ">
        <h1 className="text-white font-bold text-4xl">Weather Check</h1>
      </header>
      <main>
        <form onSubmit={handleSubmission}>
          <div className="flex items-center border-b border-b-2 border-gray-800 py-2 mt-4">
            <input
              type="text"
              placeholder="enter city name"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="appearance-none bg-transparent border-none w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none"
            ></input>
            <button
              type="submit"
              className="bg-gray-900 hover:bg-gray-800 text-white font-bold px-4 py-2 rounded-lg focus:shadow-outline"
            >
              Get Started
            </button>
          </div>
        </form>

        {weather && <Weather weather={weather} />}
        {error && (
          <div className="bg-red-500 text-white p-4 rounded-lg shadow-lg mt-4">
            {error}
          </div>
        )}
      </main>
    </div>
  );
};

export default App;
