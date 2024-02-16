import React from 'react';
import { NavLink } from 'react-router-dom';

type LinkType = {
  label: string;
  textColor: string;
  link: string;
};

export function Link({ label, textColor, link }: LinkType) {
  return (
    <NavLink
      className={({ isActive }) =>
        [isActive && 'underline', 'text-[24px]', textColor].join(' ')
      }
      to={link}
    >
      {label}
    </NavLink>
  );
}
