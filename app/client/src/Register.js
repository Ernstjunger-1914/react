import React, { useState } from 'react';
import Axios from 'axios';
import './App.css';

function Register() {
    const [usernameReg, setUsernameReg]=useState('');
    const [passwordReg, setPasswordReg]=useState('');

    const register=()=> {
        Axios.post("http://localhost:3033/register", {
        username: usernameReg,
        password: passwordReg,
        }).then((response)=> {
        console.log(response);
        });
    };

    return (
        <div className="App">
            <div className="registration">
                <h1>Registration</h1>
                <label>UserName</label>
                <input type="text" onChange={(e)=> {
                setUsernameReg(e.target.value);
                }} />
                <label>Password</label>
                <input type="password" onChange={(e)=> {
                setPasswordReg(e.target.value);
                }} />
                <button onClick={register}> Register </button>
            </div>
        </div>
    );
}

export default Register;