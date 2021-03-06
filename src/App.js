import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Input from "./components/input";
import Form from "./components/form";
import { API_KEY } from "./components/constants";
import Card from "./components/card";

class App extends React.Component {
  state = {
    city: "",
    loading: false,
    error: null,
    units: "metric",
    currentCity: true,
    currentUnits: true
  };
  onChange = event => {
    this.setState({
      [event.target.name || event.target.id]: event.target.value
    });
  };
  onSubmit = event => {
    event.preventDefault();
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${
        this.state.city
      }&APPID=${API_KEY}&units=${this.state.units}`
    )
      .then(response => {
        if (!response.ok) {
          return response
            .json()
            .then(json => this.setState({ error: json, loading: false }));
        }
        return response.json();
      })
      .then(json => {
        this.setState({
          weatherData: json,
          loading: false,
          currentUnits: this.state.units,
          currentCity: this.state.city
        });
      })
      .catch(error => this.setState({ error }));
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Form onSubmit={this.onSubmit}>
            <Input
              onChange={this.onChange}
              value={this.state.city}
              placeholder="type a city"
              id="city"
            />
            <Input
              onChange={this.onChange}
              checked={this.state.units === "metric"}
              type="radio"
              name="units"
              value="metric"
              label="metric"
              id="metric"
            />
            <Input
              onChange={this.onChange}
              checked={this.state.units === "imperial"}
              type="radio"
              name="units"
              value="imperial"
              label="imperial"
              id="imperial"
            />
            <Input
              disabled={this.state.loading || !this.state.city}
              type="submit"
            />
          </Form>
          {this.state.weatherData && (
            <Card
              city={this.state.currentCity}
              weatherData={this.state.weatherData}
              units={this.state.currentUnits}
            />
          )}
          {this.state.error && <p>Oh no! Something went wrong...</p>}
        </header>
      </div>
    );
  }
}

export default App;
