import { useRoutes } from 'react-router-dom';
import { AuthContextProvider } from './config/Auth/context';
import Layout from './config/Layout/Layout';
import routesConfig from './config/routes';
import { UserDataProvider } from './config/UserData/storage';

function App() {
  const routes = useRoutes(routesConfig);
  return (
    <>
      <Layout>
        <AuthContextProvider>
          <UserDataProvider>
            {routes}
          </UserDataProvider>
        </AuthContextProvider>
      </Layout>
    </>
  );
}

export default App;
