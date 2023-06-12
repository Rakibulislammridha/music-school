import React from 'react';
import Banner from '../Banner/Banner';
import PopularClasses from '../PopularClasses/PopularClasses';
import PopularInstructors from '../PopularInstructors/PopularInstructors';
import HarmonyHall from '../HarmonyHall/HarmonyHall';
import { Helmet } from 'react-helmet-async';

const Home = () => {

    return (
        <div>
            <Helmet>
                <title>Music School | Home</title> 
            </Helmet>
            <Banner></Banner>
            <PopularClasses></PopularClasses>
            <PopularInstructors></PopularInstructors>
            <HarmonyHall></HarmonyHall>
        </div>
    );
};

export default Home;