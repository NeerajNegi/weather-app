import axios from 'axios';

export default axios.create({
    baseURL: 'https://community-open-weather-map.p.rapidapi.com',
    headers: {
        'X-RapidAPI-Key': 'MWoBEBcHo7mshb1ZHnhFyUwxDGc6p18tdsXjsnSNExqXEXR7b2'
    }
})