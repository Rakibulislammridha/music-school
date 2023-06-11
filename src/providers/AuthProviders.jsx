import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, 
    getAuth, 
    onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, 
    signOut, 
    updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';
// import { getRole } from '../api/auth';
import axios from 'axios';
import { getRole } from '../api/auth';

export const AuthContext = createContext(null);

const auth = getAuth(app)


const AuthProviders = ({children}) => {
    
    const googleProvider = new GoogleAuthProvider()

    const [role, setRole] = useState(null);

    const [user, setUser] = useState(null);

    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        // if(user){
        //     fetch(`${import.meta.env.VITE_API_URL}/users/${user?.email}`)
        // .then(res => res.json())
        // .then(data => {
        //     setRole(data)
        // })
        // }
        if(user?.email){
            getRole(user?.email)
            .then(data => setRole(data))
        }
    }, [user?.email])

    const createUser = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const updateUser =(name, photo) =>{
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo,
        })
    }

    const signInWithGoogle = () =>{
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    const logOut = () =>{
        setLoading(true)
        return signOut(auth)
    }

    useEffect(()=> {
     const unsubscribe = onAuthStateChanged(auth, currentUser =>{
        setUser(currentUser)
        console.log(currentUser);

        // get jwt token and set it
        if(currentUser){
            axios.post(`${import.meta.env.VITE_API_URL}/jwt`, {email: currentUser?.email})
            .then(data => {
                localStorage.setItem("access-token", data.data.token)
                
            })
        }
        else{
           localStorage.removeItem("access-token") 
        }
        setLoading(false);
     })
     return () => {
        return unsubscribe();
     }
    }, [])

    const authInfo = {
        user,
        role,
        setRole,
        loading,
        setLoading,
        createUser,
        signIn,
        logOut,
        updateUser,
        signInWithGoogle,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;