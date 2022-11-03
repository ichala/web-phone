import React, { useContext } from 'react';
import { CgDarkMode } from 'react-icons/cg';
import { UserDataContext } from '../../config/UserData/storage';

function Settings() {
  const { UserData, setUserData } = useContext(UserDataContext);

  return (
    <div className="absolute left-0  h-full w-full mb-10">
      <div className="text-center text-xl p-4 font-bold">Settings</div>
      <ul className="menu bg-base-100 w-full h-full font-semibold">
        <li>
          <span className="flex justify-between " href="#s">
            <div className="flex items-center gap-2">
              <CgDarkMode size={20} />
              Dark Mode
            </div>
            <input
              type="checkbox"
              className="toggle"
              onChange={() => {
                setUserData((prev) => ({
                  ...prev, darkmode: !UserData.darkmode,
                }));
              }}
              defaultChecked={UserData.darkmode}
            />
          </span>
        </li>
        <li><a href="#s">Theme</a></li>
        <li><a href="#s">Item 3</a></li>
      </ul>
    </div>
  );
}

export default Settings;
