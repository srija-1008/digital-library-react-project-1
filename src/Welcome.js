// src/Welcome.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css'; // make sure this is imported for background styles

function Welcome() {
  const navigate = useNavigate();

  // Automatically go to login after 2 seconds
  React.useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/login');
    }, 2000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="app-background">
      <div className="app-content" style={{
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        height:'100vh',
        textAlign:'center'
      }}>
        <h1 style={{ fontSize:'48px' }}>📚 Digital Library</h1>
        <p style={{ fontSize:'22px', marginTop:'15px' }}>Empowering Knowledge for Every Student</p>
      </div>
    </div>
  );
}

export default Welcome;