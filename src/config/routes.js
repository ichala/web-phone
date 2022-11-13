import Apps from '../screens/Apps/Apps';
import Home from '../screens/Home/Home';
import Login from '../screens/Login/Login';
import Calculator from '../screens/Pages/Calculator/Calculator';
import TestCom from '../screens/Pages/CryptoApp/Components/AllCryptos';
import CryptoApp from '../screens/Pages/CryptoApp/CryptoApp';
import CryptoDetails from '../screens/Pages/CryptoApp/Components/CryptoDetails';
import JokesApp from '../screens/Pages/JokesApp/JokesApp';
import Note from '../screens/Pages/Notes/components/Note';
import Notes from '../screens/Pages/Notes/Notes';
import Tictac from '../screens/Pages/Tictac/Tictac';
import Weather from '../screens/Pages/Weather/Weather';
import Settings from '../screens/Settings/Settings';
import Protected from './Auth/Protected';
import Wallpaper from '../screens/Settings/Wallpaper/Wallpaper';
import Contacts from '../screens/Pages/Contacts/Contacts';
import AllContacts from '../screens/Pages/Contacts/Components/AllContacts';
import NewContact from '../screens/Pages/Contacts/Components/NewContact';
import ContactInfo from '../screens/Pages/Contacts/Components/ContactInfo';

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
        children: [
          {
            path: '/settings',
            element: <Settings />,
          },
          {
            path: 'wallpaper',
            element: <Wallpaper />,
          },
        ],
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
            path: 'coin/:CoinId',
            element: <CryptoDetails />,
          },
        ],
      },
      {
        path: '/contacts',
        element: <Contacts />,
        children: [
          {
            path: 'all',
            element: <AllContacts />,
          },
          {
            path: 'new',
            element: <NewContact />,
          },
          {
            path: ':id',
            element: <ContactInfo />,
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
