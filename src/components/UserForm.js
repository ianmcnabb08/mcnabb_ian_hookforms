import React, { useState } from  'react';
    
const UserForm = (props) => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [formData, setFormData] = useState(null);
    
    const createUser = (e) => {
        e.preventDefault();
        
        if (password === confirmPassword) {
        const newUser = { username, email, password, confirmPassword };
        console.log("Welcome", newUser);
        setFormData(newUser);
        setUsername("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        } else {
            console.error("Passwords Do Not Match");
        }
    };
    
    return (
        <div className='container'>
        <form className='form'>
        <div>
            <label>Username: </label>
            <input
                className='formGroup'
                name='username'
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            </div>
            <div>
            <label>Email Address: </label>
            <input
                className='formGroup'
                name='email'
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            </div>
            <div>
            <label>Password: </label>
            <input
                className='formGroup'
                name="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            </div>
            <div>
            <label>Confirm Password: </label>
            <input
                className='formGroup'
                name="confirmPassword"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
            />
            </div>
        </form>
        <div className='userInfo'>
            <h2>Form Data</h2>
            <p>Username: {username}</p>
            <p>Email: {email}</p>
            <p>Password: {password}</p>
            <p>Confirm Password: {confirmPassword}</p>
        </div>
    </div>
    );
    };
    
    export default UserForm;