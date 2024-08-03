import React from "react";

const Weather = ({ weather }) => {
  return (
    <div className="bg-gray-900 p-6 rounded-lg shadow-lg mb-4 mt-4 text-white">
      <h2 className=" font-bold text-2xl mb-4">{weather.name}</h2>
      <div className="flex flex-col items-center justify-between text-lg">
        <p>Temperatue: {weather.main.temp} °C</p>
        <p>Humidity: {weather.main.humidity} % </p>
        <p>Description: {weather.weather[0].description}</p>
        <p></p>
      </div>
    </div>
  );
};

export default Weather;
