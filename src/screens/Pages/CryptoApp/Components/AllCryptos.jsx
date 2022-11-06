import React from 'react';
import { useNavigate, useOutletContext } from 'react-router-dom';
import CoinMin from './CoinMin';

function TestCom() {
  const navigate = useNavigate();
  const coins = useOutletContext();
  return (
    <>
      {coins.map((coin) => (
        <button
          type="button"
          key={coin.uuid}
          onClick={() => { navigate(`/cryptoapp/coin/${coin.uuid}`); }}
          className="w-1/3 h-[160px] "
        >
          <CoinMin data={coin} />
        </button>
      ))}
    </>
  );
}

export default TestCom;
