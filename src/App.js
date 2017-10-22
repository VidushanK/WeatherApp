import React, { Component } from 'react';
import './styles/App.css';
class App extends Component {

  constructor() {
    super()
    this.state = {
      country: '',
      currentTemperature: 0,
      currentUnit: 'C',
      availableUnit: 'F'
    }
  }

  fetchUserLocation = (evt) => {
   evt.preventDefault();
   var userLocation = this.state.country;
   console.log(userLocation);

 };

  // store user input for location
  userInput = (evt) => {
    this.setState({
       country: evt.target.value
     });
  };

  enterKeypressed(event) {
    if (event.key === 'Enter') {
      this.setState({
        country: ''
      });
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ content: this.state.country })
  };

  render() {
    return (
      <div className="main-wrapper overlay">
        <div className="forecast-box">
            <form onSubmit={this.fetchUserLocation.bind(this)}>
              <input
              className="textbar"
              type="text"
              onChange={this.userInput.bind(this)}
              />
              <h1 className="city-name">{this.state.city}</h1>
              <h2 className="country">{this.state.country}</h2>
              <h3 className="temperature">&#176;{this.state.currentUnit} <span className="super-small">/ {this.state.availableUnit}</span></h3>
              <h2>{this.userInput.bind(this)}</h2>
            </form>

        </div>
      </div>
    );
  }
}

export default App;
