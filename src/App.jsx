import { useState } from 'react'
import {
  Routes,
  Route
} from "react-router-dom";
import './App.css'
import ThemeContext from './context/ThemeContext'
import Navbar from './Components/Navbar'
import WeatherPage from './pages/WeatherPage';
import AboutPage from './pages/AboutPage';
function App() {
  const [theme,updateTheme] = useState("light")

  return (
    <>
    <ThemeContext.Provider value={[theme,updateTheme]} >
    <Navbar />
    <Routes>
      <Route path='/' element={<WeatherPage/>} />
      <Route path='/about' element={<AboutPage/>} />
    </Routes>
    </ThemeContext.Provider>
    </>
  )
}

export default App
