import React, { Component } from 'react';
import './styles/App.css';
//
// const geolocation = (
//   navigator.geolocation ?
//   navigator.geolocation :
//   ({
//     getCurrentPosition(success, failure) {
//       failure(`Your browser doesn't support geolocation.`);
//     },
//   })
// );

class App extends Component {

  constructor() {
    super()
    this.state = {
      city: 'Loading...',
      country: 'Loading...',
      currentWeather: 'Loading...',
      currentTemperature: 0,
      currentUnit: 'C',
      availableUnit: 'F'
    }
  }
  // store user input for location
  userInput = (evt) => {
    this.setState({
       city: evt.target.value
     });
  };


  // getUserLocation(e) {
  //   const lat = e.latLng.lat();
  //   const lng = e.latLng.lng();
  //   fetch(`http://api.wunderground.com/api/ApiId/geolookup/conditions/q/lat=${lat},lng=${lng}`)
  //   .then(response => response.json())
  // }

  render() {
    return (
      <div className="main-wrapper overlay">
        <div className="forecast-box">
          <form onSubmit={this.userData}>
          <label>I want to know the weather for
           <br/><input type="text" />
          </label>
          </form>
          <h1 className="city-name">{this.state.city}</h1>
          <h2 className="country">{this.state.country}</h2>
          <h3 className="temperature">{this.state.currentTemperature} &#176;{this.state.currentUnit} <span className="super-small">/ {this.state.availableUnit}</span></h3>
          <h2>{this.state.currentWeather}</h2>
        </div>
      </div>
    );
  }
}

export default App;
