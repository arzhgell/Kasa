import React from 'react';
import logo from 'assets/illustrations/logo-bw.svg';
export function Footer() {
  return (
    <footer
      className="bg-black p-8 flex flex-col justify-center items-center text-white gap-4"
      text-white
    >
      <img src={logo} alt="logo" />
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}
