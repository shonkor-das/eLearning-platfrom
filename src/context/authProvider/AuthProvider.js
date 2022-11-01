import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth'
import app from '../../firebase/firebase.config';

export let AuthContext = createContext();
 
let auth = getAuth(app)

const AuthProvider = ({children}) => {
  let [user , setUser] = useState(null)
  let [loading, setLoading] = useState(true);

  let providerLogin = (provider) => {
    setLoading(true)
     return signInWithPopup(auth, provider)
  }

  let updateUserProfile = (profile) => {
    return updateProfile(auth.currentUser, profile)
  }

  let veryFyEmail = () => {
    return sendEmailVerification(auth.currentUser);
  }

  let logOut = () => {
    setLoading(true)
    return signOut(auth);
  }

  let createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password)
  }

  let signIn = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password);
  }

  useEffect(() => {
    let unsubscribe =  onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser)
        setLoading(false)
     });
     return () => {
       unsubscribe()
     }

  } ,[])

  let authInfo = {user,loading , setUser, setLoading , providerLogin, logOut, createUser,  signIn,updateUserProfile,veryFyEmail }
  return (
    <AuthContext.Provider value={authInfo}>
       {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;