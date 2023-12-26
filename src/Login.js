import React, { useState } from 'react';
import './Login.css';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log(`Logging in with username: ${username} and password: ${password}`);
  };

  const handleGoogleLogin = () => {
    window.gapi.auth2.getAuthInstance().signIn().then(
      (googleUser) => {
        const profile = googleUser.getBasicProfile();
        console.log('Google Login Successful!');
        console.log('ID: ' + profile.getId());
        console.log('Name: ' + profile.getName());
        console.log('Email: ' + profile.getEmail());

        handleLogin();
      },
      (error) => {
        console.error('Google Login Error:', error);
      }
    );
  };

  return (
      <div className='Login'>
        <div>
          <h2>Login</h2>
        </div>
      
          <form>
        <div className='form'>
            <label className = 'username' htmlFor="username">Username: </label>
            <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value.toUpperCase())}
            />
            <label className = 'password' htmlFor="password">Password: </label>
            <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
        </div>
        <div className='buttons'>      
            <button className = "login" type="button" onClick={handleLogin}>
            Login
            </button>
            <button className = "google" type="button" onClick={handleGoogleLogin}>
            Login with Google
            </button>
        </div>
      </form>
    </div>
  );
}

export default Login;