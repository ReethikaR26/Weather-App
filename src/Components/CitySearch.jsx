import { useState } from "react"
import './CitySearch.css'

function CitySearch({setCity}){
    const [tempItem ,settempItem] = useState("")
    const handleSearch = () => {
        const trimmed= tempItem.trim()
        if (!trimmed) return;
        setCity(trimmed);
        console.log("Searching:", trimmed);
        settempItem("");
    }
    return (
        <div className="search-bar">
            <input className="input-city" placeholder="Enter a city to check the weather" 
            value={tempItem}
            className="input-city"
            onChange={(e) => settempItem(e.target.value)}
            onKeyDown={(e) => {if(e.key === "Enter") handleSearch() ;}} />
            <button onClick={() => handleSearch()}>Search</button>
        </div>
    )
}

export default CitySearch