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
            await doSignInWithEmailAndPassword(email, password);
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
            <form className="login__form"
            onSubmit={handleEmailLogin}>
                <label className="login__label">
                    <p className="lgoin__email">Email</p>
                    <input 
                    type="email"
                    value={email}
                    id="email"
                    name="email"
                    onChange={(e) => setEmail(e.target.value)}
                    required />
                </label>
                <label className="login__label">
                    <p className="lgoin__password">Password</p>
                    <input 
                    type="password"
                    value={password}
                    id="password"
                    name="password"
                    onChange={(e) => setPassword(e.target.value)}
                    required />
                </label>
                <div className="login__button-wrapper">
                    <button type="submit" className="login__button">Login</button>
                </div>
            </form>
            <button onClick={handleGoogleLogin} 
            className="login__button-google">Sign in with Google</button>
        </div>
    );

}
export default Login;