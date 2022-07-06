import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Aux from '../hoc/Aux_';

const Layout = (props) => {
  	return (
        <Aux>
            {/* Navbar Component*/}
            <Navbar />
            {props.children}
            <Footer/>
        </Aux>
  	);
}

export default Layout;