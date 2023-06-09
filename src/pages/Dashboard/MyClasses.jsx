import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProviders';

const MyClasses = () => {

    const {user} = useContext(AuthContext);

    const [myClasses, setMyClasses] = useState([])

    useEffect(()=>{
        fetch(`${import.meta.env.VITE_API_URL}/subjects/${user.email}`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
    }, [])

    return (
        <div>
            My Class
        </div>
    );
};

export default MyClasses;