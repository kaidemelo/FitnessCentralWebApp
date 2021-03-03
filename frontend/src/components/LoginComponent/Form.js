import React, { useState } from 'react';
import FormLogin from './FormLogin';
import './Login.css';
import Success from './loginSuccess';

const Form = () => {
    const [loginSubmitted, setloginSubmitted] = useState(false);

    function submitLoginForm() {
        setloginSubmitted(true);
    }

    return (
            <div className="form-container1">
                <span className="close-btn"></span>

                <div className="form-content-left1">
                    <img src="images/img-33.svg" alt="fitness image" className="form-img1"/>
                </div>
                {!loginSubmitted ? (<FormLogin submitLoginForm={submitLoginForm} />) : (<Success />) }
            </div>
    )
}

export default Form
