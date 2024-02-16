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
      <NavLink to="/">
        <img src={logo} alt="logo" />
      </NavLink>

      <div className="flex gap-8">
        {links.map((link) => {
          return (
            <Link
              label={link.label}
              link={link.href}
              textColor="text-primary"
            />
          );
        })}
      </div>
    </header>
  );
}
