import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { doSignInWithEmailAndPassword, doSignInWithGoogle } from "../../firebase/auth";

function Login(){
    const [email, setEmail] = useState('');
    const [password,setPassword] = useState('');
    const navigate = useNavigate();

    const handleEmailLogin = async (event) => {
        event.preventDefault();
        try {
            await doSignInWithEmailAndPassword(EmailAuthCredential, password);
            navigate('/');
        } catch (error) {
            console.error("Error signing in:", error.message);
        }
    };
    const handleGoogleLogin = async () => {
        try {
            await doSignInWithGoogle();
            navigate('/');
        } catch (error) {
            console.error("Error singing in with Google:", error.message);
        }
    }

    return(
        <div className="login-wrapper">

        </div>
    )

}
export default LoginPage;