import React from 'react';
import {WiHumidity} from 'weather-icons-react'
import {WiCelsius} from 'weather-icons-react'

const WeatherDetails = ({weatherDetails}) => {
    return (
        <div className="weather-details-container">
            <div className="weather-details">
                <h1>Weather Details</h1>
                <div className="item">
                    <p>Min Temp</p>
                    <h4>{weatherDetails.minTemp}<WiCelsius size="4rem" className="icon"/></h4>
                </div>
                <div className="item">
                    <p>Max Temp</p>
                    <h4>{weatherDetails.maxTemp}<WiCelsius size="4rem" className="icon"/></h4>
                </div>
                <div className="item">
                    <p>Feels Like</p>
                    <h4>{weatherDetails.feelsLike}<WiCelsius size="4rem" className="icon"/></h4>
                </div>
                <div className="item">
                    <p>Humidity</p>
                    <h4>{weatherDetails.humidity} <WiHumidity size="4rem" className="icon"/></h4>
                </div>
            </div>
        </div>
    ); 
}

export default WeatherDetails;