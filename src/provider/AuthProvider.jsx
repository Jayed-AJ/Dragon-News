import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';

import { createUserWithEmailAndPassword, getAuth, 
         onAuthStateChanged, signInWithEmailAndPassword, 
         signOut,
         updateProfile} from "firebase/auth";
import app from "../firebase/firebase.int"

const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true);

    const createUser = (email,password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    } 
    
    const signInUser = (email,password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }

    const updateUser = (updatedData) => {
        return updateProfile(auth.currentUser,updatedData);
    }
    
    const signOutUser = () => {
        setLoading(true);
        return signOut(auth);
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser);
            setLoading(false);
        })
        return ()=>{
            unSubscribe()
        }
    },[])

    const authData = {
        user,
        setUser,
        createUser,
        signInUser,
        signOutUser,
        loading,
        setLoading,
        updateUser
    }


    return (
        <AuthContext value={authData}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;