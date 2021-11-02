import { AnimatePresence, motion } from 'framer-motion';
import Head from 'next/head';
import { ReactNode } from 'react';
import Footer from './Footer';
import NavBar from './NavBar';

const variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -100 },
};

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
      <AnimatePresence exitBeforeEnter>
        <div className='flex flex-col min-h-screen bg-darker-blue text-custom-grey font-jost'>
          <div className='flex-grow w-full max-w-3xl px-4 mx-auto sm:px-6 lg:max-w-5xl'>
            <div className=''>
              <NavBar />
              <motion.main
                className='flex-grow p-4 overflow-y-scroll'
                exit={{ opacity: 0 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                {children}
              </motion.main>
            </div>
          </div>
          <div className='w-full max-w-3xl px-4 mx-auto sm:px-6 lg:max-w-5xl'>
            <Footer />
          </div>
        </div>
      </AnimatePresence>
    </>
  );
};

export default Layout;
