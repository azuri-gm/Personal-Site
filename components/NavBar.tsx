import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { ReactNode } from 'react';
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
    <Link href={to}>
      <a
        className={
          isActive
            ? activeClassName
            : inactiveClassName
            ? inactiveClassName
            : className
        }
      >
        {children}
      </a>
    </Link>
  );
};

const NavBar = () => {
  return (
    <div className='flex flex-col items-center justify-between p-4 mb-4 sm:flex-row'>
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
            <li
              key={index}
              className='p-2 transition duration-700 ease-in-out rounded hover:bg-filler-blue'
            >
              <NavLink
                to={path}
                activeClassName='bg-filler-blue text-custom-grey p-2 rounded'
                inactiveClassName='text-custom-grey p-2'
                className='inline-flex items-center p-2 text-sm font-medium leading-5 transition-all ease-in-out border-b-2 border-transparent rounded'
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
