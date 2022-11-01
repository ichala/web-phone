import React from 'react';
import BottomNav from './components/BottomNav';

function Layout({ children }) {
  return (
    <div data-theme="wireframe" className="main antialiased font-display flex justify-center align-center items-center h-screen">
      <div className="mockup-phone">
        <div className="camera" />
        <div className="display overflow-hidden">
          <div className="artboard p-5 relative  bg-base-100 overflow-hidden phone-3">
            {children}
            <BottomNav />
          </div>
        </div>
      </div>

    </div>
  );
}

export default Layout;
