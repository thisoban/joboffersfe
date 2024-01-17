import React, { useState } from 'react';
import axios from 'axios';

const LoginComponent = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        try {
            const response = await axios.get('http://localhost:8080/Users/details', {
                params: {
                    email: email,
                    password: password
                }
            });

            // Handle the response from the backend API
            console.log(response.data);
        } catch (error) {
            // Handle any errors that occurred during the API call
            console.error(error);
        }
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleLogin}>Login</button>
        </div>
    );
};

export default LoginComponent;
