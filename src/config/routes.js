import Apps from '../screens/Apps/Apps';
import Home from '../screens/Home/Home';
import Login from '../screens/Login/Login';
import Settings from '../screens/Settings/Settings';

const routesConfig = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/settings',
    element: <Settings />,
  },
  {
    path: '/apps',
    element: <Apps />,
  },
  {
    path: '/login',
    element: <Login />,
  },
];

export default routesConfig;
