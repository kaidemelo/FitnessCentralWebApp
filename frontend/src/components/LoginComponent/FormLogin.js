import React, { useState } from 'react';
import './Login.css';
import Axios from 'axios';

const FormLogin = ({submitLoginForm}) => {
    const[username, setUsername] = useState("");
    const[password, setPassword] = useState("");
    const[loginStatus, setLoginStatus] = useState("");
    const login = () => {
        Axios.post('http://localhost:3001/login', {
                username: username,
                password: password
            }).then((response) => {

                if (response.data.message) {
                    setLoginStatus(response.data.message)
                } else {
                    setLoginStatus(response.data[0].username)
                    submitLoginForm(true);
                }
                console.log(response.data);
            });
    };

    return (
        <div className="form-content-right" >
            <form className="form">

                <h1>Welcome back. Login in to track your fitness and view your goals.</h1>

                <div className="form-inputs">
                    <label htmlFor="username"
                    className="form-label">
                        Username
                    </label>
                    <input id="username"
                    type="text"
                    name="username"
                    className="form-input"
                    placeholder="Enter your username"
                    onChange={(e)=> {
                        setUsername(e.target.value);
                    }}
                    >
                    </input>
                </div>

                <div className="form-inputs">
                    <label htmlFor="password" className="form-label">
                        Password
                    </label>
                    <input id="password"
                    type="password"
                    name="password"
                    className="form-input"
                    placeholder="Enter your password"
                    onChange={(e)=> {
                        setPassword(e.target.value);
                    }}
                    >
                    </input>
                    <p> {loginStatus} </p>
                </div>

                <button className="form-input-btn" type="button" onClick={login} >Log In</button>
                <span className="form-input-login">
                    Haven't made an account? Sign Up <a href='/sign-up'>here</a>
                </span>
            </form>
        </div>
    )
}

export default FormLogin