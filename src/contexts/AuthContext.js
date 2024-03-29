import React, {useContext, useState, useEffect} from "react";
import {auth} from "../firebase"

const AuthContext = React.createContext();

export function useAuth(){
    return useContext(AuthContext)
}
export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState()
    const [loading, setloading] = useState(true)

    function signup(email, password){
        return auth.createUserWithEmailAndPassword(email, password)
    }

    function login(email, password){
        return auth.signInWithEmailAndPassword(email, password)
    }
    function logout(){
        return auth.signOut()
    }

    function resetPassword(email){
        return auth.sendPasswordResetEmail(email)
    }
    function updatePassword(password) {
        return currentUser.updatePassword(password)
    }
    function updateEmail(email) {
        return currentUser.updateEmail(email)
    }
    useEffect(() => {
       const unsubscribe = auth.onAuthStateChanged(user => {
        setCurrentUser(user)
        setloading(false)
        })
        return unsubscribe
    }, [])
    const value = {
        currentUser,
        logout,
        login,
        signup,
        resetPassword,
        updatePassword,
        updateEmail
    }
  return <AuthContext.Provider value={value} >{!loading && children}</AuthContext.Provider>;
}
