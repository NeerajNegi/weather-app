import React from 'react';
import './App.css';

import WeatherOverview from './components/WeatherOverview';
import WeatherDetails from './components/WeatherDetails';
import SearchBox from './components/SearchBox';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      location: 'London',
    }
  }
  render() {
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
};
