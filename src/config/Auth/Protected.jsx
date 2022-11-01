import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { AuthContext } from './context';

const Protected = () => {
  const { currentUser } = useContext(AuthContext);
  if (!currentUser) {
    return (
      <Navigate to={`/login?returnUrl=${window.location.pathname} `} replace />);
  }
  return (
    <Outlet />
  );
};

export default Protected;
