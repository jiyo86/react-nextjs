import Layout from '../components/Layout';
import { SSRProvider } from 'react-bootstrap/';

import '../styles/globals.css'
import "bootstrap/dist/css/bootstrap.min.css"

function MyApp({ Component, pageProps }) {
  return (
    <>
    <SSRProvider><Layout><Component {...pageProps} /></Layout></SSRProvider>
    </>
  );
}

export default MyApp
