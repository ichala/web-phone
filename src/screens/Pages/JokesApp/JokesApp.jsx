import React, { useContext, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { UserDataContext } from '../../../config/UserData/storage';

function JokesApp() {
  const [Joke, setJoke] = useState(null);
  const { UserData, setUserData } = useContext(UserDataContext);
  const [Loading, setLoading] = useState(true);
  async function getJoke() {
    setLoading(true);
    await fetch(
      `https://v2.jokeapi.dev/joke/${UserData.jokes?.type || 'Any'}?lang=${UserData.jokes?.language || 'en'}&type=single`,
    )
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw Error('Api Error');
      })
      .then((data) => {
        setTimeout(() => {
          if (data.error) {
            setJoke({ joke: data.message });
          } else {
            setJoke(data);
          }
          setLoading(false);
        }, 1000);
      }).catch((e) => {
        setJoke({ joke: e.message });
        setLoading(false);
      });
  }

  useEffect(() => {
    getJoke();
  }, []);

  return (
    <motion.div
      className="absolute top-0 left-0 bg-gradient-to-b from-yellow-500 to-amber-500 h-full w-full"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.2,
        delay: 0.1,
        ease: [0, 0.71, 0.2, 1.01],
      }}
    >
      {!Joke ? (
        <div className="flex justify-center  items-center h-full w-full">
          <div className="animate-pulse text-4xl text-white">
            <div className="animate-pulse avatar">
              <div className="w-16 mask mask-squircle">
                <img src="/assets/images/funny.jpg" alt="weather-app" />
              </div>
            </div>
          </div>
        </div>
      )
        : (
          <div className="relative h-full">
            <div className="flex mt-10 justify-between p-4">
              <select className="select w-40" defaultValue={UserData.jokes?.language || 'en'} onChange={(e) => setUserData({ ...UserData, jokes: { ...UserData.jokes, language: e.target.value } })}>
                <option value="cs">Czech</option>
                <option value="de">German</option>
                <option value="en">English</option>
                <option value="es">Spanish</option>
              </select>
              <select className="select w-40" defaultValue={UserData.jokes?.type || 'Any'} onChange={(e) => setUserData({ ...UserData, jokes: { ...UserData.jokes, type: e.target.value } })}>
                <option value="Any">Any</option>
                <option value="Programming">Programming</option>
                <option value="Miscellaneous">Miscellaneous</option>
                <option value="Dark">Dark</option>
                <option value="Pun">Pun</option>
              </select>

            </div>
            <div className="flex flex-col justify-center h-[400px] align-center items-center gap-5">
              {Loading ? (
                <div className="animate-pulse w-[300px] flex justify-center items-center space-x-4">
                  <div className="rounded-full bg-slate-700 h-10 w-10" />
                </div>
              )
                : (
                  <p className="text-lg  text-black font-semibold p-4 text-center">
                    { Joke.joke}
                  </p>
                )}
              <button type="button" className="btn uppercase rounded" onClick={() => getJoke()}>Next</button>

            </div>
          </div>
        )}
    </motion.div>

  );
}

export default JokesApp;
