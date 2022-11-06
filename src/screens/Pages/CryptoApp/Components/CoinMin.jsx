import React, { useContext } from 'react';
import { motion } from 'framer-motion';

import {
  BsArrowDownShort, BsArrowUpRightSquare, BsArrowUpShort, BsStar, BsStarFill,
} from 'react-icons/bs';
import { UserDataContext } from '../../../../config/UserData/storage';

function CoinMin({ data }) {
  const { UserData, setUserData } = useContext(UserDataContext);
  const handlefavorite = (e, id) => {
    e.stopPropagation();
    if (UserData.CryptoApp.fav.includes(id)) {
      setUserData({
        ...UserData,
        CryptoApp:
        { ...UserData.CryptoApp, fav: UserData.CryptoApp.fav.filter((coin) => coin !== id) },
      });
    } else {
      setUserData({
        ...UserData,
        CryptoApp:
            { ...UserData.CryptoApp, fav: [...UserData.CryptoApp.fav, id] },
      });
    }
  };
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      className={`cursor-pointer text-white bg-gradient-to-t hover:bg-gradient-to-t ${data.change >= 0 ? ' from-slate-900 to-green-900  hover:from-slate-900 hover:to-green-700' : 'bg-gradient-to-t from-slate-900 to-red-900 hover:from-slate-900 hover:to-red-700'}  h-[160px] glass`}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.2,
        delay: 0.1,
        ease: [0, 0.71, 0.2, 1.01],
      }}
    >
      <div>
        <div className="flex justify-between p-1">
          <button type="button" onClick={(e) => handlefavorite(e, data.uuid)}>{UserData.CryptoApp.fav.includes(data.uuid) ? <BsStarFill className="text-yellow-200" /> : <BsStar />}</button>
          <BsArrowUpRightSquare />
        </div>
        <div className="flex justify-center mt-2">
          <div className="avatar">
            <div className="w-20 mask mask-squircle">
              <img src={data.iconUrl} className="avatar" alt="" />
            </div>
          </div>
        </div>
        <div className="flex justify-end">
          <div className="flex flex-col items-end mr-3">
            <p className="text-md font-bold">{data.symbol}</p>
            <p className="text-xs flex ">
              {data.change}
              %
              {data.change >= 0 ? <BsArrowUpShort size={13} /> : <BsArrowDownShort size={13} />}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default CoinMin;
