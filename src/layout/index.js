import React from 'react';
import { Outlet } from "react-router-dom";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Aux from '../hoc/Aux_';

const Layout = (props) => {
  	return (
        <Aux>
            {/* Navbar Component*/}
            <Navbar />
            <Outlet />
            <Footer/>
        </Aux>
  	);
}

export default Layout;