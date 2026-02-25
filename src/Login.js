// src/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css'; // Ensure this contains .app-background and .app-content styles

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Save history function
  const saveHistory = (action) => {
    const history = JSON.parse(localStorage.getItem('history')) || [];
    const user = localStorage.getItem('user');
    const time = new Date().toLocaleString();
    history.push({ user, action, time });
    localStorage.setItem('history', JSON.stringify(history));
  };

  const handleLogin = () => {
    const user = localStorage.getItem('user');
    const pass = localStorage.getItem('pass');
    if (username === user && password === pass) {
      saveHistory('Login');
      navigate('/students');
    } else {
      setError('Invalid Credentials');
    }
  };

  const handleRegister = () => {
    if (!username || !password) return alert('Fill all fields');
    localStorage.setItem('user', username);
    localStorage.setItem('pass', password);
    alert('Registered Successfully');
  };

  const handleForgetPassword = () => {
    const user = localStorage.getItem('user');
    if (username !== user) return alert('Enter your registered username');
    alert('Your password is: ' + localStorage.getItem('pass'));
  };

  return (
    <div className="app-background">
      <div className="app-content" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div style={{
          padding: '40px',
          width: '450px',
          background: '#e2e8f0',
          color: 'black',
          borderRadius: '15px',
          boxShadow: '0 15px 40px rgba(0,0,0,0.4)',
          textAlign: 'center'
        }}>
          <h2 style={{ marginBottom: '20px' }}>Login</h2>

          {/* Username */}
          <input
            placeholder="Username"
            value={username}
            onChange={e => setUsername(e.target.value)}
            style={{
              width: '80%',
              padding: '15px',
              fontSize: '18px',
              borderRadius: '20px',
              border: '3px solid #f59e0b',
              marginBottom: '15px'
            }}
          /><br />

          {/* Password */}
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            style={{
              width: '80%',
              padding: '15px',
              fontSize: '18px',
              borderRadius: '20px',
              border: '3px solid #f59e0b',
              marginBottom: '15px'
            }}
          /><br />

          {/* Buttons */}
          <button
            onClick={handleLogin}
            style={{
              padding: '12px 25px',
              fontSize: '16px',
              margin: '5px',
              borderRadius: '10px',
              cursor: 'pointer',
              backgroundColor: '#2563eb',
              color: 'white',
              border: 'none',
              transition: '0.2s'
            }}
            onMouseOver={e => e.target.style.backgroundColor = '#3b82f6'}
            onMouseOut={e => e.target.style.backgroundColor = '#2563eb'}
            onMouseDown={e => e.target.style.backgroundColor = '#1d4ed8'}
            onMouseUp={e => e.target.style.backgroundColor = '#2563eb'}
          >
            Login
          </button>

          <button
            onClick={handleRegister}
            style={{
              padding: '12px 25px',
              fontSize: '16px',
              margin: '5px',
              borderRadius: '10px',
              cursor: 'pointer',
              backgroundColor: '#2563eb',
              color: 'white',
              border: 'none',
              transition: '0.2s'
            }}
            onMouseOver={e => e.target.style.backgroundColor = '#3b82f6'}
            onMouseOut={e => e.target.style.backgroundColor = '#2563eb'}
            onMouseDown={e => e.target.style.backgroundColor = '#1d4ed8'}
            onMouseUp={e => e.target.style.backgroundColor = '#2563eb'}
          >
            Register
          </button>

          {/* Links */}
          <p style={{ marginTop: '15px', fontSize: '14px' }}>
            Don't have an account?
            <span onClick={handleRegister} style={{ color: 'blue', cursor: 'pointer', marginLeft: '5px' }}>Register</span>
          </p>
          <p style={{ marginTop: '5px', fontSize: '14px' }}>
            <span onClick={handleForgetPassword} style={{ color: 'blue', cursor: 'pointer' }}>Forget Password?</span>
          </p>

          {/* Error */}
          <p style={{ color: 'red', marginTop: '10px' }}>{error}</p>
        </div>
      </div>
    </div>
  );
}

export default Login;