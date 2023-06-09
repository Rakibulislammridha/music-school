import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, 
    getAuth, 
    onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, 
    signOut, 
    updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';
import { getRole } from '../api/auth';

export const AuthContext = createContext(null);

const auth = getAuth(app)


const AuthProviders = ({children}) => {
    
    const googleProvider = new GoogleAuthProvider()

    const [role, setRole] = useState(null);

    const [user, setUser] = useState(null);

    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        if(user){
            getRole(user.email)
            .then(data => setRole(data))
        }
    }, [user])

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