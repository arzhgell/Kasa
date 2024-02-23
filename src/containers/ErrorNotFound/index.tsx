import React from 'react';
import { NavLink } from 'react-router-dom';

export function ErrorNotFound() {
  return (
    <main className="text-primary flex flex-col justify-center items-center h-full gap-[64px]">
      <p className="font-bold md:font-black text-[96px] md:text-[188px]">404</p>
      <p className="text-[24px] text-center">
        Oups! La page que vous demandez n'existe pas.
      </p>
      <NavLink to="/" className="underline">
        Retourner sur la page d'accueil
      </NavLink>
    </main>
  );
}
