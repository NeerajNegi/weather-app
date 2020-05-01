import React from 'react';
import './App.css';

import WeatherOverview from './components/WeatherOverview';
import WeatherDetails from './components/WeatherDetails';
import SearchBox from './components/SearchBox';

function App() {
  return (
    <div className="container">
      <WeatherOverview />
      <div>
        <SearchBox />
        <WeatherDetails />
      </div>
    </div>
  );
}

export default App;
