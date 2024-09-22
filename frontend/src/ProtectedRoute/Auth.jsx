import { Navigate, Outlet } from 'react-router-dom';

const Auth = () => {
  const isAuthenticated = localStorage.getItem('isAuthenticated');

  console.log('authenticated', isAuthenticated);

  return <>{isAuthenticated ? <Navigate to="/" /> : <Outlet />}</>;
};

export default Auth;
