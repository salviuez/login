import React, { useState } from "react";
export const Login = (props) => {
    const [email, setemail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email)
    }

    return (
        <div className="auth-form-container">
            <h2>Login</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <label>Email</label>
                <input value={email} onChange={(e) => setemail(e.target.value)} type="email" placeholder="Enter email" name="email" id="email" />
                <label>Password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="****" name="password" id="password" />
                <button type="submit">Login</button>
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch("register")}>Dont have an account? Register here</button>
        </div>
    )
}