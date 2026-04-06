import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';

import { createUserWithEmailAndPassword, getAuth, 
         onAuthStateChanged, signInWithEmailAndPassword, 
         signOut} from "firebase/auth";
import app from "../firebase/firebase.int"

const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null)

    const createUser = (email,password) => {
        return createUserWithEmailAndPassword(auth,email,password);
    } 
    
    const signInUser = (email,password) => {
        return signInWithEmailAndPassword(auth,email,password);
    }
    
    const signOutUser = () => {
        return signOut(auth);
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser);
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
        signOutUser
    }


    return (
        <AuthContext value={authData}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;