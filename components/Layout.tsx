import Head from 'next/head';
import { ReactNode } from 'react';
import Footer from './Footer';
import NavBar from './NavBar';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Head>
        <meta name='description' content='Personal site built with Next.js' />
        <link
          rel='apple-touch-icon'
          sizes='57x57'
          href='/apple-icon-57x57.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='60x60'
          href='/apple-icon-60x60.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='72x72'
          href='/apple-icon-72x72.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='76x76'
          href='/apple-icon-76x76.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='114x114'
          href='/apple-icon-114x114.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='120x120'
          href='/apple-icon-120x120.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='144x144'
          href='/apple-icon-144x144.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='152x152'
          href='/apple-icon-152x152.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/apple-icon-180x180.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='192x192'
          href='/android-icon-192x192.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='96x96'
          href='/favicon-96x96.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/favicon-16x16.png'
        />
        <link rel='manifest' href='/manifest.json' />
        <meta name='msapplication-TileColor' content='#ffffff' />
        <meta name='msapplication-TileImage' content='/ms-icon-144x144.png' />
      </Head>
      {/* flex-grow max-w-3xl mx-auto px-4 sm:px-6 lg:max-w-5xl w-full */}
      <div className='flex flex-col min-h-screen bg-darker-blue text-custom-grey font-jost'>
        <div className='flex-grow max-w-3xl mx-auto px-4 sm:px-6 lg:max-w-5xl w-full'>
          <div className=''>
            <NavBar />
            <div className='flex-grow p-4 overflow-y-scroll'>{children}</div>
          </div>
        </div>
        <div className='max-w-3xl mx-auto px-4 sm:px-6 lg:max-w-5xl w-full'>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Layout;
