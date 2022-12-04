import React, { useContext } from 'react';
import { ImArrowLeft } from 'react-icons/im';
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MdWallpaper } from 'react-icons/md';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import { UserDataContext } from '../../../config/UserData/storage';

function Wallpaper() {
  const { UserData, setUserData } = useContext(UserDataContext);
  const PremadeWallpapers = [
    {
      id: 0,
      url: 'default',
    },
    {
      id: 1,
      url: '/assets/wallpapers/wp-1.jpg',
    },
    {
      id: 2,
      url: '/assets/wallpapers/wp-2.jpg',
    },
    {
      id: 3,
      url: '/assets/wallpapers/wp-3.jpg',
    },
    {
      id: 4,
      url: '/assets/wallpapers/wp-4.jpg',
    },
    {
      id: 5,
      url: '/assets/wallpapers/wp-5.jpg',
    },
    {
      id: 6,
      url: '/assets/wallpapers/wp-6.jpg',
    },
    {
      id: 7,
      url: '/assets/wallpapers/wp-7.jpg',
    },
    {
      id: 8,
      url: '/assets/wallpapers/wp-8.jpg',
    },
    {
      id: 9,
      url: '/assets/wallpapers/wp-9.jpg',
    },
  ];

  return (
    <div className="absolute top-0 left-0 bg-base-100 h-full w-full">
      <motion.div
        initial={{ x: 500 }}
        animate={{ x: 0 }}
        transition={{
          duration: 0.2,
          delay: 0.1,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <div className="absolute bg-base-100 top-0 left-0 h-full w-full">
          <div className="flex justify-evenly mt-10 items-center p-4">
            <Link to="/settings">
              <ImArrowLeft size={20} />
            </Link>
            <span className="text-center flex flex-row gap-1 justify-center items-center text-md font-semibold">
              <MdWallpaper size={20} />
              Wallpapper
            </span>
            <div />
          </div>
          <p className="font-semibold mt-3 ml-3">Choose a background</p>
          <div className="p-2">
            <Swiper
              spaceBetween={50}
              slidesPerView={3}
              allowTouchMove="false"
              className="p-1"
              loop
              modules={[Navigation]}
              navigation={{
                nextEl: '.review-swiper-button-next',
                prevEl: '.review-swiper-button-prev',
              }}
            >
              {PremadeWallpapers.map((wp) => (
                <SwiperSlide onClick={(() => setUserData({ ...UserData, settings: { ...UserData.settings, wallpaper: { link: wp.url, id: wp.id } } }))} key={wp.id} className="cursor-pointer">
                  <div
                    style={{
                      backgroundColor: 'transparent', backgroundImage: wp.id === 0 ? 'none' : `url(${wp.url})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover',
                    }}
                    className={`h-[200px] w-[140px] rounded bg-black ${wp.id === 0 && 'border-2 border-slate-800'}`}
                  >
                    {UserData.settings.wallpaper.id === wp.id && <div className="badge m-1 badge-success rounded">Selected</div> }
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="flex justify-between p-1">
              <BsFillArrowLeftCircleFill className="cursor-pointer review-swiper-button-prev" />
              <BsFillArrowRightCircleFill className="cursor-pointer review-swiper-button-next" />
            </div>
          </div>

        </div>
      </motion.div>
    </div>
  );
}

export default Wallpaper;
