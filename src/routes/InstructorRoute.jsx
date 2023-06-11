import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Loader from '../pages/Shared/Loader/Loader';
import useAuth from '../hooks/useAuth';
import useInstructor from '../hooks/useInstructor';

const InstructorRoute = ({children}) => {

    const {user, loading} = useAuth();

    const [isInstructor, isInstructorLoading] = useInstructor()

    const location = useLocation();


    if(loading || isInstructorLoading){
        return <Loader></Loader>
    }

    if(user && isInstructor){
        return children
    }

    return (
        <Navigate to="/login" state={{from: location}} replace>
        </Navigate>
    );
};

export default InstructorRoute;