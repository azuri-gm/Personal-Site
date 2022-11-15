import Link from 'next/link';
import { useRouter } from 'next/router';
import { ReactNode } from 'react';
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

const NavLink = ({
  to,
  className,
  activeClassName,
  inactiveClassName,
  children,
}: {
  to: string;
  className: string;
  activeClassName: string;
  inactiveClassName: string;
  children: ReactNode;
}) => {
  const router = useRouter();
  const isActive = router.pathname === to;
  return (
    <Link
      href={to}
      className={
        isActive
          ? activeClassName
          : inactiveClassName
          ? inactiveClassName
          : className
      }
    >
      {children}
    </Link>
  );
};

const NavBar = () => {
  return (
    <div className='flex sm:flex-row flex-col justify-between items-center mb-4 p-4'>
      <Link href='/' passHref>
        <div className='flex mb-2 sm:mb-0'>
          <Heart />
          <p>Azuri Gaytan</p>
        </div>
      </Link>
      <nav>
        <ul className='flex gap-x-2'>
          {links.map(({ name, path }, index) => (
            <li
              key={index}
              className='p-2 transition duration-700 ease-in-out hover:bg-filler-blue rounded'
            >
              <NavLink
                to={path}
                activeClassName='bg-filler-blue text-custom-grey p-2 rounded'
                inactiveClassName='text-custom-grey p-2'
                className='inline-flex items-center p-2 border-b-2 border-transparent text-sm font-medium leading-5 transition-all ease-in-out rounded'
              >
                {name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
