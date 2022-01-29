import React, { useContext, useEffect, useState } from "react";
import { auth } from "./firebase-config"


const AuthContext = React.createContext();

export const useAuth = () => {
    //returns all AuthContext values which are 
    //currentUser,
    // signUp,
    // signIn,
    // logout,
    // resetPassword,
    // updateEmail,
    // updatePassword
    // after rendering
    return useContext(AuthContext);
}


export const AuthProvider = ({ children }) => {

    const [currentUser, setCurrentUser] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        //default user is null
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user);
            setLoading(false);
        });

        return unsubscribe;
    }, [])

    const value = {
        currentUser
    }

    return (

        //Asign AuthContext value, so it can be accessed by all components
        <AuthContext.Provider value={value}>

            {!loading && children}

        </AuthContext.Provider>
    );
}