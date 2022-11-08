import moment from 'moment';
import React from 'react';

function Home() {
  const time = moment().format('HH:MM');
  const date = moment().format('MMM Do YY');
  return (

    <div className="absolute top-0 left-0 glass p-5 h-full w-full">
      <h1 className=" text-7xl font-bold text-white">Hello There !</h1>
      <h2 className=" text-5xl mt-10 text-center text-white">{time}</h2>
      <h3 className=" text-2xl text-center text-white">{date}</h3>
    </div>
  );
}

export default Home;
