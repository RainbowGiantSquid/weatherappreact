import React from "react";
import "./card.css";

const Card = props => (
  <div className="weather-card">
    <p>Current weather in {props.city}</p>
    <p>
      {Math.round(props.weatherData.main.temp)}{" "}
      {props.units === "metric" ? "ºC" : "F"}
    </p>
    <p>
      <img
        src={`http://openweathermap.org/img/w/${
          props.weatherData.weather[0].icon
        }.png`}
        alt={props.weatherData.weather[0].description}
      />
      {props.weatherData.weather[0].description}
    </p>
  </div>
);

export default Card;
