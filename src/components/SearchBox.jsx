import React, { useState } from 'react';
import searchIcon from '../assets/icons/search.svg';
import loadingIcon from '../assets/icons/loading.svg';

const SearchBox = ({ city: defaultCity, loading, search, buttonBgColor }) => {

    let [city, setCity] = useState(defaultCity);

    const handleKeyDown = (e) => {
        if (e.keyCode === 13) {
            search(city);
        }
    }

    return (
        <div className="search-container">
            <input 
                type="text" 
                placeholder="Search City" 
                value={city} 
                onChange={(event) => setCity(event.target.value)}
                onKeyDown={handleKeyDown}/>
            <button 
                onClick={() => search(city)} 
                className="search-btn"
                style={{ background: buttonBgColor}}>
                <img src={loading ? loadingIcon : searchIcon} alt=""/>
            </button>
        </div>
    ); 
}

export default SearchBox;