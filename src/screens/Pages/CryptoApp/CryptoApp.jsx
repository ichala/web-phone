import { motion } from 'framer-motion';
import { useContext, useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { UserDataContext } from '../../../config/UserData/storage';

function CryptoApp() {
  const [CryptoData, setCryptoData] = useState(null);
  const { UserData, setUserData } = useContext(UserDataContext);
  const [Errors, setErrors] = useState(null);
  const navigate = useNavigate();
  async function getCryptoData() {
    if (!UserData.CryptoApp) {
      setUserData({ ...UserData, CryptoApp: { fav: [] } });
    }
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_RAPIDAPI_COINRANK_KEY,
        'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
      },
      params: {
        referenceCurrencyUuid: 'yhjMzLPhuIDl',
        timePeriod: '24h',
        orderBy: 'marketCap',
        orderDirection: 'desc',
        limit: '50',
        offset: '0',
      },
    };
    await fetch('https://coinranking1.p.rapidapi.com/coins', options)
      .then((response) => response.json())
      .then((data) => {
        setCryptoData(data);
        navigate('all');
      }).catch(() => setErrors('Api Error'));
  }

  useEffect(() => {
    getCryptoData();
  }, []);

  return (
    <motion.div
      className="absolute top-0 left-0 bg-gradient-to-t from-slate-900 to-indigo-900 h-full w-full"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.2,
        delay: 0.1,
        ease: [0, 0.71, 0.2, 1.01],
      }}
    >
      {!CryptoData
        ? (
          <div className="flex flex-col justify-center items-center h-full w-full">
            <div className="flex  justify-center ">
              <h1 className="text-3xl text-white font-bold"> CryptoApp</h1>
              <span className="flex h-3 w-3">
                <span className="animate-ping absoluteh-full w-full rounded-full bg-sky-400 opacity-75" />
              </span>
            </div>
            {Errors && (
            <div className="badge badge-error mt-5">
              {Errors}
            </div>
            )}
          </div>
        )
        : (
          <div className="relative h-full">
            <div className="flex mt-6 justify-center p-4">
              <h1 className="text-3xl text-white font-bold"> CryptoApp</h1>
              <span className="flex h-3 w-3">
                <span className="absoluteh-full w-full rounded-full bg-sky-400 opacity-75" />
              </span>
            </div>
            <Outlet context={CryptoData.data.coins} />
          </div>
        )}
    </motion.div>
  );
}

export default CryptoApp;
