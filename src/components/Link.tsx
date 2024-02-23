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
        [
          isActive && 'underline',
          'text-[16px] md:text-[24px] whitespace-nowrap	',
          textColor,
        ].join(' ')
      }
      to={link}
    >
      {label}
    </NavLink>
  );
}
