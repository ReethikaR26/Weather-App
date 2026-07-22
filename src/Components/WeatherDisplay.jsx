

function WeatherDisplay({weather}){

    return (
        <>
          <div>
            
            {weather && 
            <div>
              <h2>{weather.name}</h2>
            <h2>{weather.main.temp}</h2>
            </div>
            
            }
          </div>
        </>
    )
}

export default WeatherDisplay