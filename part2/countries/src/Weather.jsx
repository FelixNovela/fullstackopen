import { useState, useEffect } from 'react'
import axios from 'axios'

const Weather = ({ capital, latlng }) => {
  const [weather, setWeather] = useState(null)
  const [lat, lon] = latlng

  useEffect(() => {
    axios
      .get('https://api.openweathermap.org/data/2.5/weather', {
        params: { lat, lon, units: 'metric', appid: import.meta.env.VITE_SOME_KEY }
      })
      .then(response => setWeather(response.data))
      .catch(() => setWeather(null))
  }, [lat, lon])

  if (!weather) {
    return null
  }

  const { icon, description } = weather.weather[0]

  return (
    <div>
      <h2>Weather in {capital}</h2>
      <p>Temperature {weather.main.temp} Celsius</p>
      <img src={`https://openweathermap.org/img/wn/${icon}@2x.png`} alt={description} />
      <p>Wind {weather.wind.speed} m/s</p>
    </div>
  )
}

export default Weather