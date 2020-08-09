import React, {useState, useEffect} from "react"
import { fetchWeather } from "./api/fetchWeather"
import { fetchCities } from "./api/fetchCities"
import { TextField } from "@material-ui/core"
import './App.css'
import CitiesPicker from './Components/CitiesPicker/CitiesPicker'

// TODO Use material-ui

const App = () => {
    const [query, setQuery] = useState('')
    const [weather, setWeather] = useState({})


    const handleCityChange = async (query) => {
            const data = await fetchWeather(query)
            setWeather(data)
            setQuery('')
    }

    return (
        <div className="main-container">
            <CitiesPicker handleCityChange={handleCityChange} />
            {weather.main && (
                <div className="city">
                    <h2 className="city-name">
                        <span>{weather.name}</span>
                        <sup>{weather.sys.country}</sup>
                    </h2>
                    <div className="city-temp">
                        {Math.round(weather.main.temp)}
                        <sup>&deg;C</sup>
                    </div>
                    <div className="info">
                        <img className="city-icon"
                        src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} 
                        alt={weather.weather[0].description}
                        />
                        <p>{weather.weather[0].description}</p>
                    </div>
                </div>
            )}
        </div>
    )
}
export default App