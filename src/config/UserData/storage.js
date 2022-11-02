import { useState, createContext, useContext } from 'react';
import { AuthContext } from '../Auth/context';

export const UserDataContext = createContext();

export const UserDataProvider = ({ children }) => {
  const user = useContext(AuthContext).currentUser;
  const [UserData, setUserData] = useState(JSON.parse(localStorage.getItem('UserData')) || { user, theme: 'light' });
  localStorage.setItem('UserData', JSON.stringify(UserData));
  return (
    <UserDataContext.Provider value={{ UserData, setUserData }}>
      {children}
    </UserDataContext.Provider>
  );
};
