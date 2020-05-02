import axios from 'axios';

const apiKey = '3cdddad68932a6f7fcb71c819f31af20';

const getWeatherByCity = (city) => {
    return axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
}

export default getWeatherByCity;