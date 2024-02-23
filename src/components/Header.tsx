import React from 'react';
import { NavLink } from 'react-router-dom';

import logo from 'assets/illustrations/logo.svg';

import { Link } from './Link';
export function Header() {
  const links = [
    { label: 'Accueil', href: '/' },
    { label: 'A propos', href: '/about' },
  ];
  return (
    <header className="flex justify-between items-center">
      <NavLink to="/" className="w-4/12 md:6/12">
        <img src={logo} alt="logo" />
      </NavLink>

      <nav className="flex gap-8 items-center">
        {links.map((link) => {
          return (
            <Link
              label={link.label}
              link={link.href}
              textColor="text-primary"
            />
          );
        })}
      </nav>
    </header>
  );
}
