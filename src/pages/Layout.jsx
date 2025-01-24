import React from 'react'
import { Outlet } from 'react-router-dom'
import { Navbar } from '../components/Navbar'
import Footer from '@/components/Footer';
import SearchBarContainer from '@/components/searchBar/SearchBarContainer';


const Layout = () => {
  return (
    <>
      <Navbar />
      <SearchBarContainer />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout
