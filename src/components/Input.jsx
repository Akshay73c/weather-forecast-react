import React from "react";
import {useWeather} from "../context/Weather"

export default function Input() {
    const weather = useWeather();
    return (
        <input 
            className="input-field"
            placeholder="Search Here"
            value={weather.searchCity} 
            onChange={(e) => weather.setSearchCity(e.target.value)}

        />
    )
}