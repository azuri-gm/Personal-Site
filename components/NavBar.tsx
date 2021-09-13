import Link from 'next/link';
import Heart from './icons/Heart';

type Link = {
  name: string;
  path: string;
};

const links: Link[] = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'Blog',
    path: '/blog',
  },
  {
    name: 'About',
    path: '/about',
  },
];

const NavBar = () => {
  return (
    <div className='flex sm:flex-row flex-col justify-between items-center mb-4 p-4'>
      <Link href='/' passHref>
        <a>
          <div className='flex mb-2 sm:mb-0'>
            <Heart />
            <p>Azuri Gaytan</p>
          </div>
        </a>
      </Link>
      <nav>
        <ul className='flex gap-x-2'>
          {links.map(({ name, path }, index) => (
            <li key={index} className='p-2 hover:bg-filler-blue rounded'>
              <Link href={path}>
                <a>{name}</a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
