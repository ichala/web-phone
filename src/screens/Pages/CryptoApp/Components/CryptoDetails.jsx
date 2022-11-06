import React, { useContext } from 'react';
import { Link, useOutletContext, useParams } from 'react-router-dom';
import { ImArrowLeft } from 'react-icons/im';
import {
  BsArrowDownShort, BsArrowUpShort, BsStar, BsStarFill,
} from 'react-icons/bs';
import millify from 'millify';
import CryptoChart from './CryptoChart';
import { UserDataContext } from '../../../../config/UserData/storage';

function CryptoDetails() {
  const coins = useOutletContext();
  const { CoinId } = useParams();
  const coin = coins.find((obj) => obj.uuid === CoinId);
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
    <>
      <div className=" p-3 flex items-center text-white">
        <div className="flex w-full justify-evenly items-center">
          <Link to="/cryptoapp/all">
            <ImArrowLeft size={20} />
          </Link>
          <div className="flex gap-1 justify-center items-center">
            <div className="avatar">
              <div className="w-7 mask mask-squircle">
                <img src={coin.iconUrl} className="avatar" alt="" />
              </div>
            </div>
            <span className="text-2xl font-semibold">{coin.name}</span>
          </div>
          <button type="button" onClick={(e) => handlefavorite(e, coin.uuid)}>{UserData.CryptoApp.fav.includes(coin.uuid) ? <BsStarFill className="text-yellow-400" /> : <BsStar />}</button>
        </div>
      </div>

      <div><CryptoChart coin={coin} /></div>
      <div className="flex w-full flex-col justify-center items-center text-white ">
        <div className="flex  gap-2 p-4  bg-gradient-to-r from-slate-900 to-indigo-900 w-full  w-full  justify-center items-center">
          <span className="font-semibold">
            Change:
          </span>
          <span className="flex font-semibold">
            {coin.change}
            %
            {coin.change >= 0 ? <BsArrowUpShort size={13} /> : <BsArrowDownShort size={13} />}
          </span>
        </div>
        <div className="flex  gap-2  p-4 bg-gradient-to-l from-slate-900 to-indigo-900 w-full  justify-center items-center">
          <span className="font-semibold">
            Price:
          </span>
          <span className="font-semibold">
            { millify(coin.price) }
            $
          </span>
        </div>
        <div className="flex gap-2 bg-gradient-to-r from-slate-900 to-indigo-900  p-4  w-full  justify-center items-center">
          <span className="font-semibold">
            MarketCap:
          </span>
          <span className="font-semibold">
            { millify(coin.marketCap) }
          </span>
        </div>
        <div className="flex  gap-2 bg-gradient-to-l from-slate-900 to-indigo-900  p-4  w-full  justify-center items-center">
          <span className="font-semibold">
            BTC Price:
          </span>
          <span className="font-semibold">
            { Number(coin.btcPrice).toFixed(5) }
            $
          </span>
        </div>
      </div>
    </>
  );
}

export default CryptoDetails;
