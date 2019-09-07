import React from "react";
import "./card.css";
import {zeroPad} from '../../utilities'

const Card = props => {
  const sunrise = new Date(props.weatherData.sys.sunrise)
  const sunset = new Date(props.weatherData.sys.sunset)
  const sunsetHours = sunset.getHours();
  const sunsetMinutes = sunset.getMinutes();
  const sunriseHours = sunrise.getHours();
  const sunriseMinutes = sunrise.getMinutes();
  return (
    <div className="weather-card">
      <p>
        Current weather in {props.city}, {props.weatherData.sys.country}
      </p>
      <p>
        {Math.round(props.weatherData.main.temp)}{" "}
        {props.units === "metric" ? "ºC" : "F"}
      </p>
      <p>Sunrise time: {zeroPad(sunriseHours)}:{zeroPad(sunriseMinutes)}</p>
      <p>Sunset time: {zeroPad(sunsetHours)}:{zeroPad(sunsetMinutes)}</p>
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
};

export default Card;
