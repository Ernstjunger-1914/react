import React, { useState } from 'react';
import './Login.css';

function Login() {
    const [userid, setUserId]=useState();
    const [password, setPassword]=useState();

    const handleSubmit = async (e) => {
        e.preventDefault();
        let result = await loginUser({
            userid,
            password
        });
        result = await result.json();
    
        if(result.status) {
            console.log('success');
        }else{
            console.log('fail');
        }
    }

    const loginUser = async (credentials) => {
        return fetch('/user/auth', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            mode: 'cors',
            body: JSON.stringify(credentials)
        })
    }

    return(
        <div className="login-wrapper">
            <h1>Please Login</h1>
            <form>
                <label>
                    <p>ID</p>
                    <input type="text" onChange={e=>setUserId(e.target.value)} />
                </label>
                <label>
                    <p>Password</p>
                    <input type="password" onChange={e=>setPassword(e.target.value)} />
                </label>
                <div>
                    <button type="button" onClick={handleSubmit}>Submit</button>
                </div>
            </form>
        </div>
    );
}

export default Login;