import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { doSignInWithEmailAndPassword, doSignInWithGoogle } from "../../firebase/auth";
import "./Login.scss";

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
        <div className="login">
            <form className="login__form"
            onSubmit={handleEmailLogin}>
                <label className="login__label">
                    <p className="login__text">Email</p>
                    <input
                    className="login__input" 
                    type="email"
                    value={email}
                    id="email"
                    name="email"
                    onChange={(e) => setEmail(e.target.value)}
                    required />
                </label>
                <label className="login__label">
                    <p className="login__text">Password</p>
                    <input 
                    className="login__input"
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
            
            <div className="login__divider">
                <span className="login__divider-text">OR</span>
            </div>

            <div className="login__links">
                <p className="login__link-text">Don't have an account? <Link className="login__link" to="/signup">Sign up now</Link></p>
                <Link to="/forgot-password">Forgot password?</Link>
            </div>
        </div>
    );

}
export default Login;