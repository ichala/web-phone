import { useState, createContext } from 'react';

export const UserDataContext = createContext();

export const UserDataProvider = ({ children }) => {
  const [UserData, setUserData] = useState(JSON.parse(localStorage.getItem('UserData')) || { darkmode: false, settings: { wallpaper: { link: 'default', id: 0 } } });
  localStorage.setItem('UserData', JSON.stringify(UserData));
  return (
    <UserDataContext.Provider value={{ UserData, setUserData }}>
      {children}
    </UserDataContext.Provider>
  );
};
