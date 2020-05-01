import React, { useState} from 'react';
import searchIcon from '../assets/icons/search.svg';
import loadingIcon from '../assets/icons/loading.svg';

const SearchBox = () => {
    let [loading, setLoading] = useState(false);

    return (
        <div className="search-container">
            <input type="text" placeholder="Search Location"/>
            <button onClick={() => setLoading(true)} className="search-btn"><img src={loading ? loadingIcon : searchIcon} alt=""/></button>
        </div>
    ); 
}

export default SearchBox;