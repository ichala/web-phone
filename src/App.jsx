import { useRoutes } from 'react-router-dom';
import Layout from './config/Layout/Layout';
import routesConfig from './config/routes';

function App() {
  const routes = useRoutes(routesConfig);
  return (
    <>
      <Layout>
        {routes}
      </Layout>
    </>
  );
}

export default App;
