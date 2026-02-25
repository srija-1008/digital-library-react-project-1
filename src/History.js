import React from 'react';
import { useNavigate } from 'react-router-dom';

function History() {
  const navigate = useNavigate();

  const history = JSON.parse(localStorage.getItem('history')) || [];

  const handleBack = () => navigate('/students');

  return (
    <div style={{
      backgroundColor:'#0f172a',
      minHeight:'100vh',
      paddingTop:'50px',
      paddingBottom:'50px',
      textAlign:'center',
      color:'white'
    }}>
      <h2 style={{marginBottom:'30px'}}>Activity History</h2>

      <div style={{
        backgroundColor:'#1e293b',
        padding:'20px',
        borderRadius:'15px',
        width:'80%',
        maxWidth:'800px',
        margin:'0 auto',
        maxHeight:'500px',
        overflowY:'auto'
      }}>
        {history.length === 0 ? (
          <p>No Records Found</p>
        ) : (
          history.map((h, idx) => (
            <div key={idx} style={{
              backgroundColor:'#0f172a',
              padding:'15px',
              marginBottom:'10px',
              borderRadius:'10px',
              color:'#e2e8f0',
              boxShadow:'0 4px 10px rgba(0,0,0,0.3)',
              textAlign:'left'
            }}>
              <p><strong>User:</strong> {h.user}</p>
              <p><strong>Action:</strong> {h.action}</p>
              <p><strong>Subject:</strong> {h.subject}</p>
              {h.extra && <p><strong>Info:</strong> {h.extra}</p>}
              <p><strong>Date & Time:</strong> {h.time}</p>
            </div>
          ))
        )}
      </div>

      <button 
        onClick={handleBack} 
        style={{
          marginTop:'30px',
          padding:'12px 25px',
          fontSize:'16px',
          borderRadius:'10px',
          cursor:'pointer',
          backgroundColor:'#2563eb',
          color:'white',
          border:'none',
          transition:'0.2s'
        }}
        onMouseOver={e => e.target.style.backgroundColor='#3b82f6'}
        onMouseOut={e => e.target.style.backgroundColor='#2563eb'}
        onMouseDown={e => e.target.style.backgroundColor='#1d4ed8'}
        onMouseUp={e => e.target.style.backgroundColor='#3b82f6'}
      >
        Back
      </button>
    </div>
  );
}

export default History;