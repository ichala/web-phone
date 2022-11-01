import React from 'react';
import { motion } from 'framer-motion';
import { AiOutlineCloud } from 'react-icons/ai';
import {
  BsWind, BsArrowUp, BsArrowDown, BsSunrise, BsSunset,
} from 'react-icons/bs';
import { IoWaterOutline } from 'react-icons/io5';
import { FiSettings } from 'react-icons/fi';

function Weather() {
  // async function getWeather() {
  //   await fetch(`https://api.openweathermap.org/data/2.5/weather?q=tunisia&units=metric&appid=${process.env.REACT_APP_OPENWEATHER_API_KEY}`).then(
  //     (res) => res.json(),
  //   ).then((data) => console.log(data));
  // }
  // getWeather();

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
                <div className="cloud  gap-2 align-center items-center flex">
                  <AiOutlineCloud size={30} color="white" />
                  75%
                </div>
                <div className="wind gap-2 align-center items-center flex">
                  <BsWind size={27} color="white" />
                  3.3ms
                </div>
                <div className="humidity gap-2 align-center items-center flex">
                  <IoWaterOutline size={30} color="white" />
                  3.3ms
                </div>
              </div>
              <div className="temp flex mt-10">
                <div className="temp-val text-8xl">44</div>
                <div className="tem-details justify-center  text-4xl font-bold flex flex-col">
                  <span>°C</span>
                  <div className="flex flex-col justify-center mt-2 items-center gap-1">
                    <span className="flex justify-center items-center font-semibold text-sm">
                      <BsArrowUp size={14} />
                      <p>3°</p>
                    </span>
                    <span className="flex text-sm font-semibold">
                      <BsArrowDown size={14} />
                      <p>3°</p>
                    </span>

                  </div>
                </div>
              </div>
              <div className="location flex flex-col justify-center items-center">
                <h3 className="text-xl mt-5 font-semibold">TUNISIA,TN</h3>
                <h4 className="text-md text-center mt-1">heavy snow</h4>
                <img src="http://openweathermap.org/img/wn/10d@4x.png" alt="" />
              </div>
            </div>
            <div className="flex w-full justify-around mt-8 items-center">
              <div className="rise flex flex-col items-center ">
                <BsSunrise size={40} color="white" />
                <span className="text-2xl text-white">Sunrise</span>
                <span className="text-2xl text-white">04:00PM</span>
              </div>
              <div className="down flex flex-col  items-center ">
                <BsSunset size={40} color="white" />
                <span className="text-2xl text-white">Sunset</span>
                <span className="text-2xl text-white">04:00PM</span>
              </div>
            </div>
          </div>
          <div className="drawer-side">
            <label htmlFor="my-drawer" className="drawer-overlay" />
            <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
              <li>Sidebar Item 1</li>
              <li>Sidebar Item 2</li>
            </ul>
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default Weather;
