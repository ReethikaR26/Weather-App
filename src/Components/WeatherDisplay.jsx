import './WeatherDisplay.css'

function WeatherDisplay({weather}){

  if (!weather) {
    return (
      <div className="weather-display">
        <div className="empty-state">
          <p>Search for a city to see weather</p>
        </div>
      </div>
    );
  }
    const getWeatherIcon = (condition) => {
    const icons = {
      'Clear': 'fa-sun',
      'Clouds': 'fa-cloud',
      'Rain': 'fa-cloud-rain',
      'Snow': 'fa-snowflake',
      'Thunderstorm': 'fa-bolt',
      'Drizzle': 'fa-cloud-rain',
      'Mist': 'fa-smog',
      'Smoke': 'fa-smog',
      'Haze': 'fa-smog',
      'Fog': 'fa-smog',
    };
    return icons[condition] || 'fa-cloud-sun';
  };

  const weatherCondition = weather.weather?.[0]?.main || 'Clear';
  const iconClass = getWeatherIcon(weatherCondition);
  const description = weather.weather?.[0]?.description || 'Clear sky';

    return (
        <>
        <div className='weather-bg'>
          <div className="weather-display">
          
              <div >
                  <div className="city-header">
                    <h2>{weather.name}, {weather.sys?.country}</h2>
                    <i className={`fas ${iconClass}`}></i>
                  </div>
                  <div className="weather-condition">
                      {description.charAt(0).toUpperCase() + description.slice(1)}
                  </div>
                  <div className="temp-big"> {Math.round(weather.main.temp)}<span className="temp-unit">°C</span></div>
              
              <div className="weather-meta">
                <div className="weather-meta-item">
                  <i className="fas fa-thermometer-half"></i>
                  <span>Feels like <strong>{Math.round(weather.main.feels_like)}°C</strong></span>
                </div>
                <div className="weather-meta-item">
                  <i className="fas fa-droplet"></i>
                  <span>Humidity <strong>{weather.main.humidity}%</strong></span>
                </div>
                <div className="weather-meta-item">
                  <i className="fas fa-wind"></i>
                  <span>Wind <strong>{weather.wind.speed} m/s</strong></span>
                </div>
                <div className="weather-meta-item">
                  <i className="fas fa-compress-alt"></i>
                  <span>Pressure <strong>{weather.main.pressure} hPa</strong></span>
                </div>
              </div>
            </div>
          </div>
        </div>
        </>
    )
}

export default WeatherDisplay