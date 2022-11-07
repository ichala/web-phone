import React, { useContext } from 'react';
import { UserDataContext } from '../UserData/storage';
import BottomNav from './components/BottomNav';

function Layout({ children }) {
  const { UserData } = useContext(UserDataContext);
  return (
    <div data-theme={`${UserData.darkmode ? 'black' : 'wireframe'}`} className="main antialiased font-display flex justify-center align-center items-center h-screen">
      <div className="mockup-phone">
        <div className="camera" />
        <div className="display  overflow-hidden">
          <div
            style={{
              backgroundImage: UserData.settings?.wallpaper.id === 0 ? 'none' : `url(${UserData.settings?.wallpaper.link})`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              backgroundSize: 'cover',
            }}
            className="artboard p-9 relative  bg-base-100 overflow-hidden phone-3"
          >
            {children}
            <BottomNav />
          </div>
        </div>
      </div>

    </div>
  );
}

export default Layout;
