import { useRoutes } from 'react-router-dom';
import { AuthContextProvider } from './config/Auth/context';
import Layout from './config/Layout/Layout';
import routesConfig from './config/routes';

function App() {
  const routes = useRoutes(routesConfig);
  return (
    <>
      <Layout>
        <AuthContextProvider>
          {routes}
        </AuthContextProvider>
      </Layout>
    </>
  );
}

export default App;
