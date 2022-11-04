import React from 'react';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from "firebase/auth";
import auth from '../firebase.init';

const RequireAuth = ({ children }) => {
    const navigate = useNavigate();

    onAuthStateChanged(auth, (user) => {
        if (!user) {
            return navigate("/login")
        }
    });
    return children;
};

export default RequireAuth;