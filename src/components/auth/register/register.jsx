import React, { useState } from "react";
import { Navigate, Link, useNavigate } from 'react-router-dom';
import { useAuth } from "../../../contexts/authContext";
import { doCreateUserWithEmailAndPassword } from "../../../firebase/auth";

const Register = () => {
    const navigate = useNavigate()

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isRegistering, setIsRegistering] = useState('');
    const [errorMessage, setErrormessage] = useState('');

    const onsubmit = async (e) => {
        e.preventDefault();
        if(!isRegistering) {
            setIsRegistering(true)
            await doCreateUserWithEmailAndPassword(email, password);
        }
    }
    return (
        <>
        {userLoggedIn && (<Navigate to={'/home'} replace={true} />)}
        </>
    )
}