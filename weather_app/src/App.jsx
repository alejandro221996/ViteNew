
import React,{ useEffect,useState } from 'react'
import './App.css'
import axios from "axios";
import Cloudy from './components/icons/Cloudy'
import Sun from './components/icons/Sun'
import WeatherHourRow from './components/ui/WeatherHourRow'
import WeatherRow from './components/ui/WeatherRow'
import { baseURL } from './consts'

function App() {
  const [temp, setTemp] = useState('')
  const [city, setCity] = useState('')
  const [high, setHigh] = useState('')
  const [low, setLow] = useState('')
  const [weather, setWeather] = useState('')
  useEffect(() => {
    axios.get(baseURL).then((response) => {
      let temp = Math.round(response.data.main.temp)
      let city = response.data.name
      let high = Math.round(response.data.main.temp_max)
      let low = Math.round(response.data.main.temp_min)
      let weather = response.data.weather[0].main
      setTemp(temp)
      setCity(city)
      setHigh(high)
      setLow(low)
      setWeather(weather)
    });  
    
  }, [])
  return (
    <section className=" bg-black flex items-center justify-center h-screen w-full">
      <article className='font-serif  rounded-3xl text-white text-center border-4 px-4 py-4 bg-cover hero_banner border-white'>
        <h3 className="text-2xl pb-2 font-bold">{city}</h3>
        <div className='flex items-center justify-center'>
          <h2 className="text-6xl pb-2">{temp}</h2>
          <Cloudy height="64px" width="64px" />
        </div>
        <h4 className="text-2xl font-serif font-bold mt-4">{weather}</h4>
        <section className='flex justify-around text-2xl items-center mt-4'>
          <p>H: {high}°</p>
          <p>L: {low}°</p>
        </section>
        <section className="flex flex-col p-4 items-center border-2 rounded-xl mt-4">
          <p className="py-2 font-mono font-bold">Rainy conditions expected around 11:00</p>
            <div className='flex gap-6'>
              <WeatherHourRow hour="21:00" temp="20°" />
              <WeatherHourRow hour="22:00" temp="22°" />
              <WeatherHourRow hour="23:00" temp="24°" />
              <WeatherHourRow hour="00:00" temp="26°" />
              <WeatherHourRow hour="01:00" temp="28°" />
            </div>   
        </section>
        <section className='border-2 rounded-xl mt-2 py-2 px-2'>
          <WeatherRow day="Mon" temp="30°" icon={<Sun height="24px" width="24px"/>} />
          <WeatherRow day="Tue" temp="27°" icon={<Cloudy height="24px" width="24px" />} />
          <WeatherRow day="Wed" temp="25°" icon={<Sun height="24px" width="24px" />} />
          <WeatherRow day="Thu" temp="28°" icon={<Cloudy height="24px" width="24px" />} />
          <WeatherRow day="Fri" temp="30°" icon={<Cloudy height="24px" width="24px" />} />
          <WeatherRow day="Sat" temp="32°" icon={<Sun height="24px" width="24px" />} />
          <WeatherRow day="Sun" temp="35°" icon={<Sun height="24px" width="24px" />} />
        </section>
      </article>
    </section>

  )
}

export default App
