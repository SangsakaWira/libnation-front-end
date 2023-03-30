import { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import PublicRoute from '../components/PublicRoute';
import PrivateRoute from '../components/PrivateRoute';
import Layout from '@/components/Layout';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css'

function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const { asPath } = router;
  const privateRoutes = ['/home', '/profile', '/product']; 
  const isPrivateRoute = privateRoutes.includes(asPath);

  return (
    <>
      {isPrivateRoute ? (
        <PrivateRoute>
          <Layout>
            <Container>
              <Component {...pageProps} />
            </Container>
          </Layout>
        </PrivateRoute>
      ) : (
        <PublicRoute>
          <Component {...pageProps} />
        </PublicRoute>
      )}
    </>
  );
}

export default App;