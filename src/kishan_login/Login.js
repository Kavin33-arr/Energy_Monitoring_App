import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth'; // Import the necessary functions
import './Login.css';

import username_icon from './username.png';
import password_icon from './password.png';
import email_icon from './email.png';

const Login = () => {
    const navigate = useNavigate();
    const [action, setAction] = useState("Login");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const auth = getAuth(); // Initialize the auth object

    const handleAuthentication = async () => {
        try {
            if (action === "Login") {
                await signInWithEmailAndPassword(auth, email, password); // Use the auth object here
            } else {
                await createUserWithEmailAndPassword(auth, email, password); // Use the auth object here
            }
            navigate('/app'); // Redirect to devices page after successful authentication
        } catch (error) {
            console.error("Authentication error:", error.message);
            console.log("Failed");
            // Handle authentication errors here
        }
    };

    return (
        <div className='container'>
            <div className='loginHeader'>
                <div className='text'>{action}</div>
                <div className='underline'></div>
            </div>
            <div className='inputs'>
                {action === "Login" ? null : (
                    <div className='input'>
                        <img src={username_icon} alt='' />
                        <input type='text' placeholder='Name' />
                    </div>
                )}

                <div className='input'>
                    <img src={email_icon} alt='' />
                    <input type='email' placeholder='Email Id' required value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className='input'>
                    <img src={password_icon} alt='' />
                    <input type='password' placeholder='Password' required value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
            </div>
            {action === "Sign Up" ? null : (
                <div className='forgot-password'>Can't Remember Password? <span>Click here</span></div>
            )}
            <div className='confirm-submission'>
                <div className={action === "Sign Up" ? "submit second" : "submit"} onClick={() => { setAction("Login"); handleAuthentication(); }}>Login</div>
                <div className={action === "Login" ? "submit second" : "submit"} onClick={() => { setAction("Sign Up"); handleAuthentication(); }}>Sign Up</div>
            </div>
        </div>
    );
};

export default Login;
