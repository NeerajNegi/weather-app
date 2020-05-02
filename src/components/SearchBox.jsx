import React, { useState } from 'react';
import searchIcon from '../assets/icons/search.svg';
import loadingIcon from '../assets/icons/loading.svg';

const SearchBox = ({ city: defaultCity, loading, search }) => {

    let [city, setCity] = useState(defaultCity);

    return (
        <div className="search-container">
            <input type="text" placeholder="Search City" value={city} onChange={(event) => setCity(event.target.value)}/>
            <button onClick={() => search(city)} className="search-btn"><img src={loading ? loadingIcon : searchIcon} alt=""/></button>
        </div>
    ); 
}

export default SearchBox;