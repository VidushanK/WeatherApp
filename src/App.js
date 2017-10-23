import React, { Component } from 'react';
import './styles/App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      country: 'Waiting for User input..',
      data: {},
      currentTemperature: 0,
      currentUnit: 'C',
    }
  }

  // stores the current state of country in a variable, and the variable is used to query
  // response is then converted into JSON and then set the object as a data state
  fetchUserLocation = (evt) => {
    evt.preventDefault();
    var userLocation = this.state.country;
    console.log(userLocation);
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${userLocation}&appid=7e07c7c24f9992939cb8c23a3155f4ae&units=metric`)
    .then(response => response.json())
    .then((data) => {
       console.log(data)
       this.setState({
        data: data
       })
     })
  };

  // store user input for location
  userInput = (evt) => {
    this.setState({
       country: evt.target.value
     });
  };

  render(){
    let currentTemp = 'Loading...';
    if (this.state.data.list) {
      currentTemp = this.state.data.list[0].main.temp;
    }
    return (
      <div className="main-wrapper overlay">
        <div className="forecast-box">
          <h1 className="banner">Weather App</h1>
            <form onSubmit={this.fetchUserLocation.bind(this)}>
              <input
              placeholder="Enter Your City"
              className="textbar"
              type="text"
              onChange={this.userInput.bind(this)}
              />
              <h1 className="city-name">{this.state.city}</h1>
              <h2 className="country">{this.state.country}</h2>
            </form>
            <p className="temp-wrapper">
              <h3 className="temperature">{ currentTemp }
                <span className="temperature">&#176;{this.state.currentUnit}</span>
              </h3>
            </p>
        </div>
      </div>
    );
  }
}
export default App;
