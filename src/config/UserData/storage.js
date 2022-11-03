import { useState, createContext } from 'react';

export const UserDataContext = createContext();

export const UserDataProvider = ({ children }) => {
  const [UserData, setUserData] = useState(JSON.parse(localStorage.getItem('UserData')) || { theme: 'light' });
  localStorage.setItem('UserData', JSON.stringify(UserData));
  return (
    <UserDataContext.Provider value={{ UserData, setUserData }}>
      {children}
    </UserDataContext.Provider>
  );
};
