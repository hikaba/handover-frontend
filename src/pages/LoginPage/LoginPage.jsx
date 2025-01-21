import React from "react";
import Login from "../../components/Login/Login";
import "./LoginPage.scss";

function LoginPage(){
    return(
        <div className="login-page">
            <h1 className="login-page__header">HandOver</h1>
            <Login />
        </div>
    )
}
export default LoginPage;