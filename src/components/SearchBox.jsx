import React, { useState} from 'react';
import searchIcon from '../assets/icons/search.svg';
import loadingIcon from '../assets/icons/loading.svg';

import API from '../api';

const SearchBox = () => {
    let [loading, setLoading] = useState(false);
    let [location, setLocation] = useState('London');

    const search = () => {
        setLoading(true);
        API.get(`weather?units=metric&q=${location}`)
            .then(data => {
                console.log(data.data);
                setLoading(false);
            })
            .catch(error => {
                setLoading(false);
                console.error(error);
            });
    }

    return (
        <div className="search-container">
            <input type="text" placeholder="Search Location" value={location} onChange={(event) => setLocation(event.target.value)}/>
            <button onClick={() => search()} className="search-btn"><img src={loading ? loadingIcon : searchIcon} alt=""/></button>
        </div>
    ); 
}

export default SearchBox;