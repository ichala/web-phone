import React from 'react';
import { motion } from 'framer-motion';

function Tictac() {
  return (
    <motion.div
      className="absolute top-0 left-0 bg-gradient-to-b from-amber-200 to-cyan-100 h-full w-full"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.2,
        delay: 0.1,
        ease: [0, 0.71, 0.2, 1.01],
      }}
    >
      <div className="flex justify-center items-center h-full w-full">
        <div className="animate-pulse text-4xl text-white">
          <div className="avatar">
            <div className="w-16 mask mask-squircle">
              <img src="/assets/images/tiktak.jpg" alt="weather-app" />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Tictac;
