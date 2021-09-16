import type { AppProps, NextWebVitalsMetric } from 'next/app';
import '../styles/globals.scss';

export function reportWebVitals(metric: NextWebVitalsMetric) {
  console.log(metric);
}

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
export default MyApp;
