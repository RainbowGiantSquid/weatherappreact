import React from "react";
import "./card.css";

const Card = props => (
  <div className="weather-card">
    <p>Current weather in {props.city}</p>
    <p>
      {Math.round(props.weatherData.main.temp)}{" "}
      {props.units === "metric" ? "ºC" : "F"}
    </p>
    <p>{props.weatherData.weather[0].description}</p>
  </div>
);

export default Card;
