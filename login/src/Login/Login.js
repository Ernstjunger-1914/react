import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Login.css';

async function loginUser(credentials) {
    return fetch('http://127.0.0.1:3033/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    }).then(data=>data.json())
}

export default function Login({setToken}) {
    const [userid, setUserId]=useState();
    const [password, setPassword]=useState();

    const handleSubmit=async e=> {
        e.preventDefault();
        const token=await loginUser({
            userid,
            password
        });
        setToken(token);
    }

    return(
        <div className="login-wrapper">
            <h1>Please Login</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    <p>ID</p>
                    <input type="text" onChange={e=>setUserId(e.target.value)} />
                </label>
                <label>
                    <p>Password</p>
                    <input type="password" onChange={e=>setPassword(e.target.value)} />
                </label>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired
}