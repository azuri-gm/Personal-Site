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
    name: 'About',
    path: '/about',
  },
  {
    name: 'Blog',
    path: '/blog',
  },
  {
    name: 'Contact',
    path: '/contact',
  },
];

const NavBar = () => {
  return (
    <div className='flex justify-between items-center mb-4 p-4'>
      <div className='flex'>
        <Heart />
        <p>Azuri Gaytan</p>
      </div>
      <nav>
        <ul className='flex gap-x-2'>
          {links.map(({ name, path }, index) => (
            <li key={index}>
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
