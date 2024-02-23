import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Layout } from 'components/Layout';

import { About } from 'containers/About';
import { ErrorNotFound } from 'containers/ErrorNotFound';
import { HomeDetail } from 'containers/HomeDetail';

import { Home } from './containers/Home';

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="home/:id" element={<HomeDetail />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<ErrorNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
