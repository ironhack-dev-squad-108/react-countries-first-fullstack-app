import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      countries: [],
      isLoading: true,
      error: null
    }
  }

  componentDidMount() {
    // If you want to test a slower API, put the axios call inside a setTimeout
    // If you want to see what happen when there is an error with the server, change the URL of the API
    axios.get("http://localhost:5000/api/countries/")
    .then(response => {
      this.setState({
        countries: response.data,
        isLoading: false
      })
    })
    .catch(err => {
      console.log(err)
      this.setState({
        error: 'Sorry, there is a problem with the server :('
      })
    })
  }

  render() {
    if (this.state.error) {
      return (
        <div className="App">
          <h1>React Countries</h1>
          <div>{this.state.error}</div>
        </div>
      )
    }
    if (this.state.isLoading) {
      return (
        <div className="App">
          <h1>React Countries</h1>
          <div>Loading...</div>
        </div>
      )
    }
    return (
      <div className="App">
        <h1>React Countries</h1>
        {this.state.countries.length === 0 && <div>Sorry, it's the end of the world, there is no more countries</div>}
        {this.state.countries.length > 0 && (
          <ul>
            {this.state.countries.map(country => (
              <li key={country.cca3}>{country.name.common}</li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}

export default App;