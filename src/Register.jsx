import React, { useState } from "react";

export const Register = (props) => {


    const [email, setemail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email)
    }

    return (
        <div className="auth-form-container">
            <h2>Register</h2>
            <form className="register-form" onSubmit={handleSubmit}>
                <label>FullName</label>
                <input value={name} type="name" placeholder="fullName" id="name" name="name" />
                <label>Email</label>
                <input value={email} onChange={(e) => setemail(e.target.value)} type="email" placeholder="Enter email" name="email" id="email" />
                <label>Password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="****" name="password" id="password" />
                <button type="submit">Login</button>
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch("login")}>Already have an account? signin here</button>
        </div>
    )
}