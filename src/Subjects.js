// src/Subjects.js
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './App.css'; // Make sure your CSS file has .app-background and .app-content

function Subjects() {
  const { category } = useParams();
  const navigate = useNavigate();

  const subjects = {
    BBA: ["Principles of Management", "Business Economics", "Financial Accounting"],
    MBA: ["Marketing Management", "Finance Management", "Human Resource"],
    BTECH: ["Operating Systems", "Computer Networks", "Thermodynamics"],
    "STORY BOOKS": ["Harry Potter", "The Alchemist", "Charlie and the Chocolate Factory"],
    "HISTORY BOOKS": ["World History", "Indian History", "Ancient Civilizations"]
  };

  // Save history function
  const saveHistory = (action, subject = "", extra = "") => {
    const history = JSON.parse(localStorage.getItem('history')) || [];
    const user = localStorage.getItem('user');
    const time = new Date().toLocaleString();
    history.push({ user, action, subject, extra, time });
    localStorage.setItem('history', JSON.stringify(history));
  };

  const readBook = (subject) => {
    alert("Reading " + subject);
    saveHistory("Read", subject);
  };

  const buyBook = (subject) => {
    const price = Math.floor(Math.random() * 500) + 200;
    alert(`Purchased ${subject} for ₹${price}`);
    saveHistory("Purchased", subject, `₹${price}`);
  };

  const rentBook = (subject) => {
    const date = prompt("Enter return date (YYYY-MM-DD)");
    if (date) {
      alert(`Rented ${subject} until ${date}`);
      saveHistory("Rented", subject, `Return: ${date}`);
    }
  };

  const handleBack = () => {
    saveHistory("Back to Categories");
    navigate('/students');
  };

  return (
    <div className="app-background">
      <div className="app-content" style={{ paddingTop: '50px', minHeight: '100vh', textAlign: 'center' }}>
        <h2 style={{ marginBottom: '30px', fontSize: '32px' }}>{category} Books</h2>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
          {subjects[category]?.map(book => (
            <div key={book} style={{
              background: 'linear-gradient(135deg, #2563eb, #3b82f6)',
              color: 'white',
              padding: '25px 30px',
              borderRadius: '15px',
              width: '400px',
              textAlign: 'center',
              boxShadow: '0 8px 20px rgba(0,0,0,0.3)'
            }}>
              <h3 style={{ marginBottom: '15px' }}>{book}</h3>
              <div>
                {/* Read Button */}
                <button
                  onClick={() => readBook(book)}
                  style={{
                    padding: '12px 25px',
                    margin: '5px',
                    borderRadius: '10px',
                    fontSize: '16px',
                    cursor: 'pointer',
                    backgroundColor: '#1e40af', // bright blue
                    border: 'none',
                    color: 'white',
                    transition: '0.2s'
                  }}
                  onMouseOver={e => e.target.style.backgroundColor = '#3b82f6'}
                  onMouseOut={e => e.target.style.backgroundColor = '#1e40af'}
                  onMouseDown={e => e.target.style.backgroundColor = '#1e3a8a'}
                  onMouseUp={e => e.target.style.backgroundColor = '#3b82f6'}
                >
                  Read
                </button>

                {/* Buy Button */}
                <button
                  onClick={() => buyBook(book)}
                  style={{
                    padding: '12px 25px',
                    margin: '5px',
                    borderRadius: '10px',
                    fontSize: '16px',
                    cursor: 'pointer',
                    backgroundColor: '#1e40af',
                    border: 'none',
                    color: 'white',
                    transition: '0.2s'
                  }}
                  onMouseOver={e => e.target.style.backgroundColor = '#3b82f6'}
                  onMouseOut={e => e.target.style.backgroundColor = '#1e40af'}
                  onMouseDown={e => e.target.style.backgroundColor = '#1e3a8a'}
                  onMouseUp={e => e.target.style.backgroundColor = '#3b82f6'}
                >
                  Buy
                </button>

                {/* Rent Button */}
                <button
                  onClick={() => rentBook(book)}
                  style={{
                    padding: '12px 25px',
                    margin: '5px',
                    borderRadius: '10px',
                    fontSize: '16px',
                    cursor: 'pointer',
                    backgroundColor: '#1e40af',
                    border: 'none',
                    color: 'white',
                    transition: '0.2s'
                  }}
                  onMouseOver={e => e.target.style.backgroundColor = '#3b82f6'}
                  onMouseOut={e => e.target.style.backgroundColor = '#1e40af'}
                  onMouseDown={e => e.target.style.backgroundColor = '#1e3a8a'}
                  onMouseUp={e => e.target.style.backgroundColor = '#3b82f6'}
                >
                  Rent
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Back Button */}
        <button
          onClick={handleBack}
          style={{
            marginTop: '40px',
            padding: '12px 25px',
            fontSize: '16px',
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
          onMouseUp={e => e.target.style.backgroundColor = '#3b82f6'}
        >
          Back
        </button>
      </div>
    </div>
  );
}

export default Subjects;