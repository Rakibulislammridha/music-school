import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/Shared/footer/Footer';
import Navbar from '../pages/Shared/Navbar/Navbar';

const Main = () => {

    return (
        <div>
            <Navbar></Navbar>
            <div className='pt-20 min-h-[calc(100vh-70px)]'>
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;