import React from 'react';
import { Link } from 'react-router-dom';
import Title from '../../components/Title/Title';
import errorCover  from "../../assets/errorCover.jpg"

const ErrorPage = () => {
    return (
        <div className='text-center error-container'>
            <Title
                subHeading={"You Got An "}
                heading={"Error !"}
            ></Title>
            <img className='ml-[400px] mt-[40px] w-[500px] h-[500px]' src={errorCover} alt="" />
            <h2 className='text-5xl font-bold'>404 Page Not Found</h2>
            <Link to="/">
            <button className='btn mb-10 bg-orange-600 text-white hover:bg-orange-500 w-3/12 mt-10'>Back To Home</button>
            </Link>
        </div>
    );
};

export default ErrorPage;