import React from 'react';
import { Header } from './Header';
import { Outlet } from 'react-router-dom';
import { Footer } from './Footer';
export function Layout() {
  return (
    <div className="flex flex-col h-screen">
      <div className="py-8 px-16 flex flex-col grow gap-8">
        <Header />
        <div className="grow">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
}
