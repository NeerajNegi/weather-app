import React from 'react';

// Icons import
import { WiDaySunny } from 'weather-icons-react'
import {WiRain} from 'weather-icons-react'
import {WiSnow} from 'weather-icons-react'
import {WiLightning} from 'weather-icons-react'
import {WiShowers} from 'weather-icons-react'
import {WiCloudy} from 'weather-icons-react'
import {WiSmoke} from 'weather-icons-react'


const WeatherOverview = ({ city, time, temp, weather}) => {

    const getMainIcon = () => {
        switch(weather) {
            case 'Clear':
                return <WiDaySunny size="8rem"/>
            case 'Clouds':
                return <WiCloudy size="8rem"/>
            case 'Atmosphere':
                return <WiSmoke size="8rem"/>
            case 'Thunderstorm':
                return <WiLightning size="8rem"/>
            case 'Drizzle':
                return <WiShowers size="8rem"/>
            case 'Rain':
                return <WiRain size="8rem"/>
            case 'Snow':
                return <WiSnow size="8rem"/>
            default:
                return <WiDaySunny size="8rem"/>
        }
    }

    return (
        <div className="weather-overview-container">
            <div className="temperature-overview-container">
                <h1 className="main-temperature">{temp}°</h1>
                <div className="city-time-container">
                    <p>{ time }</p>
                    <h4>{ city.charAt(0).toUpperCase() + city.slice(1) }</h4>
                </div>
                { getMainIcon() }
            </div>
        </div>
    ); 
}

export default WeatherOverview;