import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

function Notes() {
  const [Loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <motion.div
      className="absolute top-0 left-0 bg-gradient-to-t from-slate-900 to-zinc-900 h-full w-full"
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
                <img src="/assets/images/notes.jpg" alt="weather-app" />
              </div>
            </div>
          </div>
        </div>
      )
        : (
          <>
            <div className="mt-10 p-3 flex items-center text-orange-400">
              <input type="text" className="input input-sm w-full bg-transparent border-1 rounded-full border-orange-400 " placeholder="🔍 Search Notes" />
            </div>
            <div className="flex flex-wrap justify-center items-center gap-4">
              <div className="note text-white w-[170px] h-[100px]  bg-zinc-700 rounded-lg">
                test
              </div>
              <div className="note text-white w-[170px] h-[100px]  bg-zinc-700 rounded-lg">
                test
              </div>
            </div>

          </>
        )}
    </motion.div>
  );
}

export default Notes;
