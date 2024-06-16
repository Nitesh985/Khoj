import React from 'react'
import { Outlet } from 'react-router-dom';
import Hero from './Hero';
import Header from './Header'


function Layout() {
  return (
    <>
      <Header />
      <Hero>
        <Outlet />
      </Hero>
    </>
  );
}

export default Layout