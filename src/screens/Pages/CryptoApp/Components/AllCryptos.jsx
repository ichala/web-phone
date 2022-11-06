import React from 'react';
import { useNavigate, useOutletContext } from 'react-router-dom';
import CoinMin from './CoinMin';

function TestCom() {
  const navigate = useNavigate();
  const coins = useOutletContext();
  return (
    <>
      <div className="flex flex-wrap max-h-[590px] overflow-y-scroll no-scrollbar">

        {coins.map((coin) => (
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
