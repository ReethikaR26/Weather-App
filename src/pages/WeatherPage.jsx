import CitySearch from '../Components/CitySearch'
import WeatherDisplay from '../Components/WeatherDisplay'
import { useState, useEffect } from 'react';
import './WeatherPage.css'

function WeatherPage(){

    const [city, setCity] = useState("");
    const [weather, setWeather] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");


    useEffect(() => {
        if (!city) return;
        setLoading(true);
        setError("");
        console.log("City changed:", city);
        const encodedCity = encodeURIComponent(city.trim());
        const url=`https://api.openweathermap.org/data/2.5/weather?q=${encodedCity}&appid=ab153a65b01397057d32af516086f733&units=metric`
    fetch(url)
    .then((response) => {
        if (!response.ok) {
            throw new Error(response.status === 404 ? "City not found" : "Failed to fetch data");
        }
        return response.json()})
    .then((data) => {
      setWeather(data)
      setLoading(false)
    })
    .catch((error) => {
        setError(error);
        setWeather(null);
        console.error(error)});
    },[city])

    return (
        <>
        <div className="weather-app">
          <CitySearch setCity={setCity}/>
          <WeatherDisplay weather={weather}/>
          </div>
          
        </>
    )
}

export default WeatherPage;