import React, { useContext } from 'react';
import {
  BsArrowDownShort, BsArrowUpRightSquare, BsArrowUpShort, BsStar, BsStarFill,
} from 'react-icons/bs';
import { UserDataContext } from '../../../../config/UserData/storage';

function CoinMin({ data }) {
  const { UserData, setUserData } = useContext(UserDataContext);
  const handlefavorite = (id) => {
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

    <div className={`w-1/3 cursor-pointer text-white bg-gradient-to-t hover:bg-gradient-to-t ${data.change >= 0 ? ' from-slate-900 to-green-900  hover:from-slate-900 hover:to-green-700' : 'bg-gradient-to-t from-slate-900 to-red-900 hover:from-slate-900 hover:to-red-700'}  h-[160px] glass`}>
      <div className="flex justify-between p-1">
        <button type="button" onClick={() => handlefavorite(data.uuid)}>{UserData.CryptoApp.fav.includes(data.uuid) ? <BsStarFill className="text-yellow-200" /> : <BsStar />}</button>
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
  );
}

export default CoinMin;
