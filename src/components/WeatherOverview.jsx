import React from 'react';

const WeatherOverview = () => {
    return (
        <div className="weather-overview-container">
            <div className="temperature-overview-container">
                <h1 className="main-temperature">10°</h1>
                <div className="city-time-container">
                    <p>12:23 AM - Saturday, 2 May 2019</p>
                    <h4>London</h4>
                </div>
            </div>
        </div>
    ); 
}

export default WeatherOverview;