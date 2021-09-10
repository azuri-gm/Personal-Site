import Head from 'next/head';
import { ReactNode } from 'react';
import Footer from './Footer';
import NavBar from './NavBar';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Head>
        <meta name='description' content='Personal site built with Next.js' />
      </Head>
      <div className='w-screen mx-auto bg-dark-blue text-custom-grey font-jost'>
        <div className='sm:w-3/5 w-4/5 mx-auto p-4 flex flex-col h-screen max-h-screen'>
          <NavBar />
          <div className='flex-grow p-4 overflow-y-scroll'>{children}</div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Layout;
