import React, { useContext, useState } from 'react';
import { useNavigate, useOutletContext } from 'react-router-dom';
import { UserDataContext } from '../../../../config/UserData/storage';
import CoinMin from './CoinMin';

function TestCom() {
  const navigate = useNavigate();
  const coins = useOutletContext();
  const { UserData, setUserData } = useContext(UserDataContext);
  const [FilteredCoins, setFilteredCoins] = useState(UserData.CryptoApp?.fav_only
    ? (coins.filter((coin) => UserData.CryptoApp?.fav?.includes(coin.uuid)))
    : coins);
  const ChangeFav = (e) => {
    setUserData({ ...UserData, CryptoApp: { ...UserData.CryptoApp, fav_only: e.target.checked } });
    if (e.target.checked) {
      setFilteredCoins(coins.filter((coin) => UserData.CryptoApp?.fav?.includes(coin.uuid)));
    } else {
      setFilteredCoins(coins);
    }
  };
  return (
    <>
      <div className="p-4 flex items-center justify-center uppercase gap-3 text-white">
        <input
          type="checkbox"
          className="toggle toggle-xs toggle-warning"
          checked={UserData.CryptoApp?.fav_only}
          onChange={(e) => ChangeFav(e)}
        />
        favorites
      </div>
      <div className="flex flex-wrap max-h-[540px] overflow-y-scroll no-scrollbar mb-20">
        {FilteredCoins.map((coin) => (
          <div
            tabIndex={-42}
            type="button"
            role="presentation"
            key={coin.uuid}
            onClick={() => { navigate(`/cryptoapp/coin/${coin.uuid}`); }}
            className="w-1/3 h-[160px] "
          >
            <CoinMin data={coin} />
          </div>
        ))}
      </div>
    </>
  );
}

export default TestCom;
