import React from 'react';
import './App.css';

import WeatherOverview from './components/WeatherOverview';
import WeatherDetails from './components/WeatherDetails';
import SearchBox from './components/SearchBox';

import getWeatherByCity from './api';
import * as dayjs from 'dayjs';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      city: 'London',
      time: dayjs().format('hh:mm A - dddd, DD MMMM YYYY'),
      weatherType: '',
      weatherDetails: {
        minTemp: 0,
        maxTemp: 0,
        feelsLike: 0,
        humidity: 0,
        temp: 0,
      },
      loading: false,
      backgroundImageUrl: 'https://images.unsplash.com/photo-1541119638723-c51cbe2262aa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2552&q=80',
      buttonBgColor: '#59BEF7'
    }
  }

  componentDidMount() {
    this.search(this.state.city);
  }

  setWeatherData = (weatherData) => {
    this.setState({
      city: weatherData.city,
      time: weatherData.time,
      weatherDetails: { ...weatherData.weatherDetails },
      weatherType: weatherData.weatherType
    });

    this.setColorTheme();
  }

  search = (city) => {
    this.setState({loading: true});
    getWeatherByCity(city)
      .then(data => {
        const payload = data.data;
        console.log(payload);
        const weatherType = payload.weather[0].main;
        const weatherData = {
          city,
          weatherType,
          time: dayjs().format('hh:mm A - dddd, DD MMMM YYYY'),
          weatherDetails: {
            minTemp: Number.parseInt(payload.main.temp_min),
            maxTemp: Number.parseInt(payload.main.temp_max),
            temp: Number.parseInt(payload.main.temp),
            humidity: Number.parseInt(payload.main.humidity),
            feelsLike: Number.parseInt(payload.main.feels_like),
          }
        }
        this.setWeatherData(weatherData);
        this.setState({loading: false});
      })
      .catch(error => {
        console.error(error);
        this.setState({loading: false});
      });
  }
  
  setColorTheme = () => {
    let backgroundImageUrl;
    let buttonBgColor;
    switch(this.state.weatherType) {
      case 'Clear':
        backgroundImageUrl = 'https://images.unsplash.com/photo-1541119638723-c51cbe2262aa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2552&q=80';
        buttonBgColor = '#59BEF7'
        break;
      case 'Clouds':
        backgroundImageUrl = 'https://images.unsplash.com/photo-1557413603-d39c9484a980?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2838&q=80';
        buttonBgColor = '#f0f1f3'
        break;
      case 'Atmosphere':
        backgroundImageUrl = 'https://images.unsplash.com/photo-1528322992281-3566f32b5837?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80';
        buttonBgColor = '#81828b'
        break;
      case 'Thunderstorm':
        backgroundImageUrl = 'https://images.unsplash.com/photo-1561485132-59468cd0b553?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2148&q=80';
        buttonBgColor = '#415dd7'
        break;
      case 'Drizzle':
        backgroundImageUrl = 'https://images.unsplash.com/photo-1522546462854-d08e99422525?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2555&q=80';
        buttonBgColor = '#a99749'
        break;
      case 'Rain':
        backgroundImageUrl = 'https://images.unsplash.com/photo-1438449805896-28a666819a20?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80';
        buttonBgColor = '#43707d'
        break;
      case 'Snow':
        backgroundImageUrl = 'https://images.unsplash.com/photo-1513002066671-74ea5914a6a5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80';
        buttonBgColor = '#abaab0'
        break;
      default:
        backgroundImageUrl = 'https://images.unsplash.com/photo-1541119638723-c51cbe2262aa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2552&q=80';
        buttonBgColor = '#59BEF7'
    }
    this.setState({
      backgroundImageUrl,
      buttonBgColor
    });
  }


  render() {
    const {city, time, weatherDetails, loading, weatherType, backgroundImageUrl, buttonBgColor} = this.state;
    return (
      <div className="container" style={{ backgroundImage: `url(${backgroundImageUrl})` }}>
        <WeatherOverview 
          city={city}
          time={time}
          weather={weatherType}
          temp={weatherDetails.temp} />
        <div className="details-container">
          <SearchBox 
            loading={loading}
            city={city}
            buttonBgColor={buttonBgColor}
            search={this.search}/>
          <WeatherDetails 
            weatherDetails={weatherDetails}/>
        </div>
      </div>
    );
  }
};
