import React from 'react';
import { Link } from 'react-router-dom';

function Apps() {
  return (
    <div className="flex flex-wrap gap-3 justify-center">
      <Link to="/weather">
        <div className="avatar">
          <div className="w-16 mask mask-squircle">
            <img src="https://placeimg.com/192/192/people" alt="lol" />
          </div>
        </div>
      </Link>
      <div className="avatar">
        <div className="w-16 mask mask-squircle">
          <img src="https://placeimg.com/192/192/people" alt="lol" />
        </div>
      </div>
      <div className="avatar">
        <div className="w-16 mask mask-squircle">
          <img src="https://placeimg.com/192/192/people" alt="lol" />
        </div>
      </div>
      <div className="avatar">
        <div className="w-16 mask mask-squircle">
          <img src="https://placeimg.com/192/192/people" alt="lol" />
        </div>
      </div>
      <div className="avatar">
        <div className="w-16 mask mask-squircle">
          <img src="https://placeimg.com/192/192/people" alt="lol" />
        </div>
      </div>
    </div>
  );
}

export default Apps;
