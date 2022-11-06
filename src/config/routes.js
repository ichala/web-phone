import Apps from '../screens/Apps/Apps';
import Home from '../screens/Home/Home';
import Login from '../screens/Login/Login';
import Calculator from '../screens/Pages/Calculator/Calculator';
import TestCom from '../screens/Pages/CryptoApp/Components/AllCryptos';
import CryptoApp from '../screens/Pages/CryptoApp/CryptoApp';
import CryptoDetails from '../screens/Pages/CryptoApp/CryptoDetails/CryptoDetails';
import JokesApp from '../screens/Pages/JokesApp/JokesApp';
import Note from '../screens/Pages/Notes/components/Note';
import Notes from '../screens/Pages/Notes/Notes';
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
        path: '/notes',
        element: <Notes />,
      },
      {
        path: '/notes/:id',
        element: <Note />,
      },
      {
        path: '/tictactoe',
        element: <Tictac />,
      },
      {
        path: '/jokes',
        element: <JokesApp />,
      },
      {
        path: '/cryptoapp',
        element: <CryptoApp />,
        children: [
          {
            path: 'all',
            element: <TestCom />,
          },
          {
            path: 'coin/:id',
            element: <CryptoDetails />,
          },
        ],
      },

    ],
  },
  {
    path: '/login',
    element: <Login />,
  },

];

export default routesConfig;
