import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Calculators from 'awesome-react-calculator';

function Calculator() {
  const [Loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <motion.div
      className="absolute top-0 left-0 bg-gradient-to-t from-gray-200 to-blue-700 h-full w-full"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.2,
        delay: 0.1,
        ease: [0, 0.71, 0.2, 1.01],
      }}
    >
      {Loading ? (
        <div className="flex justify-center items-center h-full w-full">
          <div className="animate-pulse text-4xl text-white">
            <div className="avatar">
              <div className="w-16 mask mask-squircle">
                <img src="/assets/images/calculator.png" alt="weather-app" />
              </div>
            </div>
          </div>
        </div>
      )
        : (
          <div className="calculator-demo h-[685px] overflow-hidden w-full">
            <Calculators />
          </div>
        ) }
    </motion.div>
  );
}

export default Calculator;
