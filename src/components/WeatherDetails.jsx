import React from 'react';

const WeatherDetails = () => {
    return (
        <div className="weather-details-container">
            <div className="weather-details">
                <h1>Weather Details</h1>
                <div className="item">
                    <p>Min Temp</p>
                    <h4>8°</h4>
                </div>
                <div className="item">
                    <p>Max Temp</p>
                    <h4>16°</h4>
                </div>
                <div className="item">
                    <p>Feels Like</p>
                    <h4>12°</h4>
                </div>
                <div className="item">
                    <p>Humidity</p>
                    <h4>54%</h4>
                </div>
            </div>
        </div>
    ); 
}

export default WeatherDetails;