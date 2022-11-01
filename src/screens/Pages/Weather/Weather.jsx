import React from 'react';
import { motion } from 'framer-motion';

function Weather() {
  async function getWeather() {
    await fetch('https://api.openweathermap.org/data/2.5/weather?q=tunisia&appid=35a8c1cb0eb14e9be1029f4c2b074b4d').then(
      (res) => res.json(),
    ).then((data) => console.log(data));
  }
  getWeather();

  return (
    <>
      <motion.div
        className="absolute top-0 left-0 bg-gradient-to-r from-cyan-500 to-blue-500 h-full w-full"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.2,
          delay: 0.1,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <div className="flex justify-center mt-10">
          <h2 className="text-4xl">WeatherApp</h2>
        </div>
      </motion.div>
    </>
  );
}

export default Weather;
