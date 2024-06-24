// components/Header.js
import React, { useState } from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-sky-900 to-blue-700  text-white shadow-md">
      <div className="container mx-auto py-4 px-6 flex justify-between items-center">
        <div className="text-xl font-bold">
          <Link href="/">
            <p className="text-white">Realtor Logo</p>
          </Link>
        </div>
        <nav className="hidden md:block">
          <ul className="flex space-x-6 font-bold">
            <NavItem href="/">Home</NavItem>
            <NavItem href="/listings">Listings</NavItem>
            <NavItem href="/about">About</NavItem>
            <NavItem href="/contact">Contact</NavItem>
          </ul>
        </nav>
        <div className="md:hidden">
          <MobileMenu />
        </div>
      </div>
    </header>
  );
};

const NavItem = ({ href, children }) => {
  return (
    <li>
      <Link href={href}>
        <p className="text-gray-100 hover:text-gray-300 duration-300">{children}</p>
      </Link>
    </li>
  );
};

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button onClick={toggleMenu} className="text-gray-100 focus:outline-none z-20">
        {isOpen ? (
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>
      {isOpen && (
        <ul className="absolute top-12 right-0 mt-2 bg-gradient-to-r from-blue-900 to-blue-700  text-white py-2 px-4 rounded-md shadow-md z-10 w-48">
          <li><Link href="/"><p className="block py-2">Home</p></Link></li>
          <li><Link href="/listings"><p className="block py-2">Listings</p></Link></li>
          <li><Link href="/about"><p className="block py-2">About</p></Link></li>
          <li><Link href="/contact"><p className="block py-2">Contact</p></Link></li>
        </ul>
      )}
    </div>
  );
};

export default Header;
