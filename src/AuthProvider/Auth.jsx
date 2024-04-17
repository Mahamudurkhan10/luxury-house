import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";

import {  createContext, useEffect, useState } from "react";
import { auth } from "../Firebase/Firebase.init";

export const AuthContext = createContext()
const Auth = ({children}) => {
     const [user, setUser]= useState(null)
     const [loading,setLoading]=useState(true)
     const googleProvider = new GoogleAuthProvider();
     const githubProvider = new GithubAuthProvider();
     const googleLogin = ()=>{
          setLoading(true)
          return signInWithPopup(auth,googleProvider)
     }
     const githubLogin = ()=>{
          setLoading(true)
          return signInWithPopup(auth,githubProvider)
     }
     const updatePP = (name,photo)=>{
          setLoading(true)
          return updateProfile(auth.currentUser,{
               displayName:name,
               photoURL: photo
          })


     }
     const loginPass = (email,password)=>{
          setLoading(true)
          return signInWithEmailAndPassword(auth,email,password)
     }
     const register = (email,password)=>{
          setLoading(true)
         return createUserWithEmailAndPassword(auth,email,password)
     }
     const logOut = ()=>{
          setLoading(true)
          return signOut(auth)
     }
     useEffect(()=>{
          const unFollow = onAuthStateChanged(auth,currentUser =>{
               setUser(currentUser)
               setLoading(false)
          })
          return ()=>{
               unFollow
          }
     },[])
     
     const authInput ={
          googleLogin,
          loginPass,
          register,
          logOut,
          user,
          updatePP,
          githubLogin,
          loading

     }
    
     return (
          <AuthContext.Provider value ={authInput}> {children} </AuthContext.Provider>
     );
};       


export default Auth;