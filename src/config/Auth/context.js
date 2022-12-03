import { createContext, useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase';
import Loader from '../Layout/components/Loader';

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [Loading, setLoading] = useState(true);
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      if (user) {
        const image = user.photoURL || '/assets/images/no-image.png';
        setCurrentUser({ name: user.displayName, image, id: user.uid });
        setLoading(false);
      } else {
        setCurrentUser(null);
        setLoading(false);
      }
    });
    return () => {
      unsub();
    };
  }, [auth]);
  if (!Loading) {
    return (
      <AuthContext.Provider value={{ currentUser }}>
        {children}
      </AuthContext.Provider>
    );
  }
  return (
    <AuthContext.Provider value={{ currentUser }}>
      <Loader />
    </AuthContext.Provider>
  );
};
