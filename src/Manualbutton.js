import React, { useState } from 'react';
import axios from 'axios';

const Manualbutton = () => {
  const [location, setLocation] = useState('');
  const [weather, setWeather] = useState(null);

  const handleChange = (event) => {
    setLocation(event.target.value);
  }

  const getWeather = async () => {
    try {
      const API_KEY = '7d76298be1816baccf8b1be58238c7aa';
      const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}`;

      const response = await axios.get(API_URL);
      const data = response.data;
      setWeather(data);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      <form>
        <label>
          Location:
          <input type="text" value={location} onChange={handleChange} />
        </label>
        <button type="button" onClick={getWeather}> Weather Of the City</button>
      </form>
      { weather && (
        <div>
          <p>Temperature: {weather.main.temp}</p>
          <p>Description: {weather.weather[0].description}</p>
          <p>Humidity:{weather.main.humidity}</p>
          <p>Pressure:{weather.main.pressure}</p>
        </div>
      )}
    </div>
  );
}
export default Manualbutton;
