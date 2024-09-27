import React, { useState } from 'react';
import axios from 'axios';
import AdminPage from './AdminPage';
import './AdminLogin.css'


const AdminLogin = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    
    
    const handleLogin = async (event) => {
        event.preventDefault();

        // Encode the username and password for Basic Authentication
        const credentials = btoa(`${username}:${password}`);

        try {
            const response = await axios.get('http://localhost:8080/admin/dashboard', {
                headers: {
                    'Authorization': `Basic ${credentials}`
                }
            });

            if (response.status === 200) {
                // Successful authentication, set authenticated to true
                setIsAuthenticated(true);
            }
        } catch (error) {
            console.error('Error accessing admin dashboard:', error);
            setErrorMessage('Invalid username or password');
        }
    };

    return (
        <div className="login-container">
            {!isAuthenticated ? (
                <div className="login-form">
                    <h1>Admin Login</h1>
                    <form onSubmit={handleLogin}>
                        <input
                            type="text"
                            placeholder="Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="input-field"
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="input-field"
                        />
                        <button type="submit" className="button">Login</button>
                    </form>
                    {errorMessage && <p className="error-message">{errorMessage}</p>}
                </div>
            ) : (
                <AdminPage credentials={btoa(`${username}:${password}`)} />
                
            )}
        </div>
    );
};

export default AdminLogin