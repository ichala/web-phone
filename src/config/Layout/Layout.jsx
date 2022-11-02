import React from 'react';
import BottomNav from './components/BottomNav';

function Layout({ children }) {
  return (
    <div data-theme="black" className="main antialiased font-display flex justify-center align-center items-center h-screen">
      <div className="mockup-phone">
        <div className="camera" />
        <div className="display  overflow-hidden">
          <div
            // style={{
            //   backgroundImage: 'url(https://preview.redd.it/gdsbdf97ihq31.png?width=640&crop=smart&auto=webp&s=fcb5c1ed83c93580a4ddf97de06b7c606dd7d359)', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover',
            // }}
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
