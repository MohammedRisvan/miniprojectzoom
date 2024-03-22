import React from 'react';
import IndexNavbar from '../home/homeNav';
import { Outlet } from 'react-router-dom';
import Footer from '../home/Footer';

const Layout = () => {
  return (
    <div>
      <IndexNavbar/>
      <div>

      <Outlet/>
      </div>
      <Footer/>
    </div>
  )
}

export default Layout
