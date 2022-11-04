import React, { useContext } from 'react';
import { CgDarkMode } from 'react-icons/cg';
import { BiLogOutCircle } from 'react-icons/bi';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { UserDataContext } from '../../config/UserData/storage';
import { auth } from '../../config/firebase';

function Settings() {
  const { UserData, setUserData } = useContext(UserDataContext);
  const navigate = useNavigate();

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
        <li>
          <button
            type="button"
            className="flex justify-center items-center gap-1 bg-transparent hover:bg-error hover:text-error-content"
            onClick={() => {
              signOut(auth);
              navigate('/login');
            }}
          >
            <BiLogOutCircle size={20} />
            Logout
          </button>
        </li>
      </ul>
    </div>
  );
}

export default Settings;
