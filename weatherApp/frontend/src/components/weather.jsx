import React from 'react'
import axios from "axios"
import { useEffect, useState } from 'react'
import clear from '../assets/clear.png'
import cloud from "../assets/cloud.png"
import rain from  "../assets/rain.png"
import humidity from "../assets/humidity.png"
import snow from "../assets/snow.png"
import drizzle from "../assets/drizzle.png"

const Weather = () => {
    const date = new Date().toDateString()
    
    let [weather , setWeather] = useState(false)
    let [city, setCity] = useState("London")
    
    const allIcons = {
        "01d": clear,
        "01n" : clear,
        "02d" : cloud,
        "02n" : cloud,
        "03d" : cloud,
        "03n" : cloud,
        "04d" : drizzle,
        "04n" : drizzle,
        "09d" : rain,
        "09n" : rain,
        "10d" : rain,
        "10n" : rain,
        "13d" : snow,
        "13n" : snow
    }
    let Search = async () => {
        try {
            if (city === "") {
                alert("Please Enter City Name")
                return
            }
            console.log(date);
            
            console.log(city);
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${import.meta.env.VITE_API_KEY}`

            let res = await axios.get(url)
            let data = res.data
            const icon = allIcons[data.weather[0].icon] || clear

            setWeather({
                humadity : data.main.humidity,
                windspeed : data.wind.speed,
                temp : Math.floor(data.main.temp),
                icon : data.weather[0].icon,
                description : data.weather[0].main,
                location : data.name,
                icon : icon,
                pressure : data.main.pressure,
                sealevel : data.main.grnd_level,
                visibility : data.visibility

            })
            console.log(res)
        } catch (error) {
            console.log(error);

        }
    }

    useEffect(() => {
        Search()
    },[])

    let handleInput = (e) => {
        setCity(e.target.value)
    }

  
    return (

        <div class="min-h-screen flex items-center justify-center">
            <div class="flex flex-col bg-white rounded p-4 w-full max-w-xs">

                <label for="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white" >Search</label>
                <div class="relative">
                    <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg>
                    </div>
                    <input type="text"  className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-dark dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Weather" required value={city} onChange={handleInput} />
                    <button  className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:dark:bg-gray-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-gray-800 dark:hover:bg-grey-800 dark:focus:ring-blue-800" onClick={Search}>Search</button>
                </div>


                <div class="text-sm text-gray-500 m-[10px] text-center">

                    <p>
                        {date}
                    </p>
                </div>
                <div class="mt-6 text-6xl self-center inline-flex items-center justify-center rounded-lg text-indigo-400 h-24 w-24">
                    <img src={weather.icon} alt="" />
                </div>
                <div class="font-bold text-xl text-center">{weather.location}</div>

                <div class="flex flex-row items-center justify-center mt-6">
                    <div class="font-medium text-6xl">{weather.temp}°c</div>
                    <div class="flex flex-col items-center ml-6">
                        <div>{weather.description}</div>
                        <div class="mt-1">
                            <span class="text-sm"><i class="far fa-long-arrow-up"></i></span>
                            <span class="text-sm font-light text-gray-500">{weather.temp}°C</span>
                        </div>
                        <div>
                            <span class="text-sm"><i class="far fa-long-arrow-down"></i></span>
                            <span class="text-sm font-light text-gray-500">{weather.temp}°C</span>
                        </div>
                    </div>
                </div>
                <div class="flex flex-row justify-between mt-6">
                    <div class="flex flex-col items-center">
                        <div class="font-medium text-sm">Wind</div>
                        <div class="text-sm text-gray-500">{weather.windspeed}km/h</div>
                    </div>
                    <div class="flex flex-col items-center">
                        <div class="font-medium text-sm">Humadity</div>
                        <div class="text-sm text-gray-500">{weather.humadity}%</div>
                    </div>
                    <div class="flex flex-col items-center">
                        <div class="font-medium text-sm">Visibility</div>
                        <div class="text-sm text-gray-500">{weather.visibility}km</div>
                    </div>
                    
                    
                    
                </div>
                <div class="flex flex-row items-center justify-around  mt-6">
                    <div class="flex flex-col items-center">
                        <div class="font-medium text-sm">Pressure</div>
                        <div class="text-sm text-gray-500">{weather.pressure}</div>
                    </div>
                    <div class="flex flex-col items-center">
                        <div class="font-medium text-sm">Sea Level</div>
                        <div class="text-sm text-gray-500">{weather.sealevel}</div>
                    </div>
                    
                    
                    
                    
                </div>
            </div>
        </div>


    )
}

export default Weather
