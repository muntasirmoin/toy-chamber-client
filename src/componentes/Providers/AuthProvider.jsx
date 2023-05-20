import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';

import app from '../../firebase/firebase.config';

export const AuthContext = createContext();

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // user email and password

    const createUser = (email, password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    // login

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }
   
    // login with google
    const signInGoogle =() =>{
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    // 
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, loggedUser => {
               console.log('logged in user inside auth state observer', loggedUser);
               setUser(loggedUser);
               setLoading(false);
           })
           return () =>{
               unsubscribe();
           }
       }, [])

    //    

       const logOut = () =>{
        // setLoading(true);
        return signOut(auth);
    }

    // 
    const authInfo = {
        createUser,
        user,
        loading,
        signIn,
        signInGoogle,
        logOut
       

    }

    // 
    return (
        <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
    );
};

export default AuthProvider;