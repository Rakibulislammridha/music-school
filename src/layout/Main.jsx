import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/Shared/footer/Footer';
import Navbar from '../pages/Shared/Navbar/Navbar';

const Main = () => {

    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;