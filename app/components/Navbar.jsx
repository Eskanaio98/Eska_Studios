'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Navlink from './NavLink';
import { Bars2Icon, Bars3Icon ,XMarkIcon } from '@heroicons/react/24/solid';
import MenuOverlay from './MenuOverlay';

const Navlinks = [
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Contact",
    path: "#contact",
  },
];

const NavBar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className='fixed mx-auto border border-[#54e5f0] top-0 left-0 right-0 z-10 bg-[#003151] bg-opacity-100'>
      <div className='flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2'>
        <Link href={'/'} className='text-2xl md:text-5xl text-white font-semibold'>
          Eska_Studios
        </Link>
        <div className='mobile-menu block md:hidden'>
          {
            !navbarOpen ? (
              <button onClick={() => setNavbarOpen(true)} className='flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white'>
                <Bars3Icon className='h-5 w-5' />
              </button>
            ) : (
              <button onClick={() => setNavbarOpen(false)} className='flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white'>
                <XMarkIcon className ='h-5 w-5' />
              </button>
            )
          }
         </div>
        <div className='menu hidden md:block md:w-auto' id='navbar'>
          <ul className='flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0'>
            {
              Navlinks.map((link, index) => (
                <li key={index}>
                  <Navlink href={link.path} title={link.title} />
                </li>
              ))}
          </ul>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={Navlinks} /> : null}
    </nav>
  );
};

export default NavBar;
