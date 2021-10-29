import type { AppProps } from 'next/app';
import { useEffect } from 'react';
import '../styles/globals.scss';

const MyApp = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    document.documentElement.setAttribute('lang', 'es');
  }, []);

  return <Component {...pageProps} />;
};

export default MyApp;
