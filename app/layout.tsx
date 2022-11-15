import { Sono } from '@next/font/google';
import Link from 'next/link';
import '../styles/globals.scss';

const sono = Sono({
  subsets: ['latin'],
  variable: '--font-sono',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <div className='flex flex-col h-screen overflow-hidden p-8'>
        <header className='bg-fuchsia-100 mb-8 py-4'>
          <div className='container mx-auto flex justify-center'>
            <Link href='/'>🏡</Link>
            <span className='mx-auto'>Welcome to my blog</span>{' '}
          </div>
        </header>

        <main className='container mx-auto flex-1'>{children}</main>

        <footer className='bg-fuchsia-100 mt-8 py-4'>
          <div className='container mx-auto flex justify-center'>
            &copy; 2022 DailyDevTips
          </div>
        </footer>
      </div>
    </html>
  );
}
