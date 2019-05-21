import React from 'react';
import './App.css';
import WeatherDataDisplay from './weather-data-display';
import CityChanger from './city-changer';

class App extends React.Component {

  state = {
    weather: null
  }

  render() {
    let self = this;
    let display = <div></div>
    function getWeatherData(cityName) {

      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&APPID=b1940f452335ffa6df6c7adfa2cba3d1`,{
        mode: 'cors'
      })
      .then(function(response){
        return response.json()
      })
      .then(function(response){
        let newData =  {}
        newData.city = response.name + ',' + response.sys.country;
        newData.description = response.weather[0].description;
        newData.icon = `http://openweathermap.org/img/w/${response.weather[0].icon}.png`;
        newData.temp = Math.round(response.main.temp);
        newData.tempMax = Math.round(response.main.temp_max);
        newData.tempMin = Math.round(response.main.temp_min);
        newData.humidity = response.main.humidity;
        newData.wind = response.wind.speed;
        self.setState({
          weather: newData
        })
      })
    }
    if(this.state.weather){
        display = <WeatherDataDisplay data={this.state.weather} />
      } 
    return (
      <div className="main-container">
        { display }
        <CityChanger getNewWeather={getWeatherData}/>
      </div>
    );
  }
}

export default App
