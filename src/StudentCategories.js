// src/StudentCategories.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css'; // Ensure this has .app-background and .app-content styles

function StudentCategories() {
  const navigate = useNavigate();

  const categories = ['BBA', 'MBA', 'BTECH', 'STORY BOOKS', 'HISTORY BOOKS'];

  // Navigate to the selected category's subjects page
  const handleCategory = (category) => {
    navigate(`/subjects/${category}`);
  }

  // Save history function
  const saveHistory = (action) => {
    const history = JSON.parse(localStorage.getItem('history')) || [];
    const user = localStorage.getItem('user');
    const time = new Date().toLocaleString();
    history.push({ user, action, time });
    localStorage.setItem('history', JSON.stringify(history));
  }

  // Handle logout
  const handleLogout = () => {
    saveHistory("Logout");
    navigate('/login');
  }

  return (
    <div className="app-background">
      <div className="app-content" style={{ display:'flex', flexDirection:'column', alignItems:'center', paddingTop:'60px', minHeight:'100vh', textAlign:'center', color:'white' }}>
        <h2 style={{ marginBottom:'30px', fontSize:'32px' }}>Select Student Category</h2>

        {/* Categories */}
        <div style={{ display:'flex', flexDirection:'column', alignItems:'center', gap:'20px' }}>
          {categories.map(cat => (
            <div 
              key={cat}
              onClick={() => {
                saveHistory(`Selected category: ${cat}`);
                handleCategory(cat);
              }}
              style={{
                backgroundColor:'#2563eb',   // blue box
                color:'white',
                padding:'20px 60px',         // large clickable area
                fontSize:'20px',
                fontWeight:'bold',
                borderRadius:'15px',
                cursor:'pointer',
                boxShadow:'0 8px 20px rgba(0,0,0,0.3)',
                width:'300px',
                textAlign:'center',
                transition:'0.2s'
              }}
              onMouseOver={e => e.target.style.backgroundColor='#3b82f6'}
              onMouseOut={e => e.target.style.backgroundColor='#2563eb'}
            >
              {cat}
            </div>
          ))}
        </div>

        {/* History & Logout Buttons */}
        <div style={{ marginTop:'50px', display:'flex', flexDirection:'column', gap:'15px' }}>
          <button
            onClick={() => navigate('/history')}
            style={{
              padding: '12px 25px',
              fontSize: '16px',
              borderRadius: '10px',
              cursor: 'pointer',
              backgroundColor: '#2563eb',
              color: 'white',
              border: 'none',
              transition: '0.2s'
            }}
            onMouseOver={e => e.target.style.backgroundColor='#3b82f6'}
            onMouseOut={e => e.target.style.backgroundColor='#2563eb'}
            onMouseDown={e => e.target.style.backgroundColor='#1d4ed8'}
            onMouseUp={e => e.target.style.backgroundColor='#3b82f6'}
          >
            View History
          </button>

          <button
            onClick={handleLogout}
            style={{
              padding: '12px 25px',
              fontSize: '16px',
              borderRadius: '10px',
              cursor: 'pointer',
              backgroundColor: '#ef4444', // red for logout
              color: 'white',
              border: 'none',
              transition: '0.2s'
            }}
            onMouseOver={e => e.target.style.backgroundColor='#f87171'}
            onMouseOut={e => e.target.style.backgroundColor='#ef4444'}
            onMouseDown={e => e.target.style.backgroundColor='#b91c1c'}
            onMouseUp={e => e.target.style.backgroundColor='#f87171'}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default StudentCategories;