import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { AiOutlineCloud } from 'react-icons/ai';
import {
  BsWind,
  BsArrowUp,
  BsArrowDown,
  BsSunrise,
  BsSunset,
} from 'react-icons/bs';
import { IoWaterOutline } from 'react-icons/io5';
import { FiSettings } from 'react-icons/fi';

function Weather() {
  const [Country, setCountry] = useState('Tunisia');
  const [WeatherData, setWeatherData] = useState(null);
  async function getWeather() {
    await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${Country}&units=metric&appid=${process.env.REACT_APP_OPENWEATHER_API_KEY}`,
    )
      .then((res) => res.json())
      .then((data) => {
        setTimeout(() => {
          setWeatherData(data);
        }, 2000);
      });
  }
  useEffect(() => {
    getWeather();
  }, [Country]);

  return (
    <>
      <motion.div
        className="absolute top-0 left-0 bg-gradient-to-b from-cyan-500 to-blue-500 h-full w-full"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.2,
          delay: 0.1,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        {!WeatherData
          ? (
            <div className="flex justify-center items-center h-full w-full">
              <div className="animate-pulse text-4xl text-white">
                <div className="avatar">
                  <div className="w-16 mask mask-squircle">
                    <img src="/assets/images/weather-app.jpg" alt="weather-app" />
                  </div>
                </div>
              </div>
            </div>
          )
          : (
            <div className="drawer">
              <input id="my-drawer" type="checkbox" className="drawer-toggle" />
              <div className="drawer-content">
                <label htmlFor="my-drawer" className="drawer-button">
                  <div className="settings w-full flex justify-start cursor-pointer mt-10 ml-5">
                    <FiSettings size={30} color="white" />
                  </div>
                </label>
                <div className="flex glass  text-white m-2 rounded justify-center items-center flex-col">
                  <div className="flex p-2 justify-around w-full">
                    <div className="cloud  gap-2 align-center items-center flex font-semibold">
                      <AiOutlineCloud size={30} color="white" />
                      {WeatherData.clouds.all}
                      %
                    </div>
                    <div className="wind gap-2 align-center items-center flex font-semibold">
                      <BsWind size={27} color="white" />
                      {WeatherData.wind.speed}
                      ms
                    </div>
                    <div className="humidity gap-2 align-center items-center flex font-semibold">
                      <IoWaterOutline size={30} color="white" />
                      {WeatherData.main.humidity}
                      %
                    </div>
                  </div>
                  <div className="temp flex mt-10">
                    <div className="temp-val text-8xl">
                      {Math.floor(WeatherData.main.temp)}
                    </div>
                    <div className="tem-details justify-center  text-4xl font-bold flex flex-col">
                      <span>°C</span>
                      <div className="flex flex-col justify-center mt-2 items-center gap-1">
                        <span className="flex justify-center items-center font-semibold text-sm">
                          <BsArrowUp size={14} />
                          <p>
                            {Math.floor(WeatherData.main.temp_max)}
                            °
                          </p>
                        </span>
                        <span className="flex text-sm font-semibold">
                          <BsArrowDown size={14} />
                          <p>
                            {Math.floor(WeatherData.main.temp_min)}
                            °
                          </p>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="location flex flex-col justify-center items-center">
                    <h3 className="text-xl mt-5 font-semibold uppercase">
                      {WeatherData.name}
                      ,
                      {WeatherData.sys.country}
                    </h3>
                    <h4 className="text-md text-center mt-1 capitalize ">
                      {WeatherData.weather[0].description}
                    </h4>
                    <img
                      src={`http://openweathermap.org/img/wn/${WeatherData.weather[0].icon}@4x.png`}
                      alt=""
                    />
                  </div>
                </div>
                <div className="flex w-full justify-around mt-6 items-center">
                  <div className="rise flex flex-col items-center ">
                    <BsSunrise size={40} color="white" />
                    <span className="text-2xl text-white">Sunrise</span>
                    <span className="text-2xl text-white">
                      {new Date(WeatherData.sys.sunrise).getHours() < 10
                        ? `0${new Date(WeatherData.sys.sunrise).getHours()}`
                        : new Date(WeatherData.sys.sunrise).getHours()}
                      :
                      {new Date(WeatherData.sys.sunrise).getMinutes() < 10
                        ? `0${new Date(WeatherData.sys.sunrise).getMinutes()}`
                        : new Date(WeatherData.sys.sunrise).getMinutes()}
                      AM
                    </span>
                  </div>
                  <div className="down flex flex-col  items-center ">
                    <BsSunset size={40} color="white" />
                    <span className="text-2xl text-white">Sunset</span>
                    <span className="text-2xl text-white">
                      {new Date(WeatherData.sys.sunset).getHours() < 10
                        ? `0${new Date(WeatherData.sys.sunset).getHours()}`
                        : new Date(WeatherData.sys.sunset).getHours()}
                      :
                      {new Date(WeatherData.sys.sunset).getMinutes() < 10
                        ? `0${new Date(WeatherData.sys.sunset).getMinutes()}`
                        : new Date(WeatherData.sys.sunset).getMinutes()}
                      PM
                    </span>
                  </div>
                </div>
              </div>
              <div className="drawer-side">
                <label htmlFor="my-drawer" className="drawer-overlay" />
                <div className="menu pt-10 p-8 items-center overflow-y-auto w-80 bg-base-100 text-base-content">
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      setCountry(e.target.country.value);
                    }}
                  >
                    <span className="mt-20 font-bold">Select Country</span>
                    <input
                      name="country"
                      className="mt-5 p-4 input bg-secondary focus:bg-transparent text-primary-content font-bold"
                      defaultValue="Tunisia"
                      type="text"
                    />
                    <button type="submit" className="btn hover:none rounded mt-4">
                      Save
                    </button>
                  </form>
                </div>
              </div>
            </div>
          )}
      </motion.div>
    </>
  );
}

export default Weather;
