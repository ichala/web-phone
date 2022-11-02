import Apps from '../screens/Apps/Apps';
import Home from '../screens/Home/Home';
import Login from '../screens/Login/Login';
import Calculator from '../screens/Pages/Calculator/Calculator';
import Tictac from '../screens/Pages/Tictac/Tictac';
import Weather from '../screens/Pages/Weather/Weather';
import Settings from '../screens/Settings/Settings';
import Protected from './Auth/Protected';

const routesConfig = [
  {
    element: <Protected />,
    children: [
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
        path: '/weather',
        element: <Weather />,
      },
      {
        path: '/calculator',
        element: <Calculator />,
      },
      {
        path: '/tictactoe',
        element: <Tictac />,
      },

    ],
  },
  {
    path: '/login',
    element: <Login />,
  },

];

export default routesConfig;
