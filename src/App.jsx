import React, { useState } from 'react';
import { FaEnvelope, FaLock } from 'react-icons/fa';
import './App.css';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = () => {
    if (email && password) {
      setLoggedIn(true);
    }
  };

  return (
    <div className="App">
      {!loggedIn ? (
        <div className="login">
          <h2>Accedi utilizzando le tue credenziali</h2>
          <div className="input-container email-container">
            <FaEnvelope className="icon" />
            <input 
              type="email" 
              placeholder="Email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
            />
          </div>
          <div className="input-container password-container">
            <FaLock className="icon" />
            <input 
              type="password" 
              placeholder="Password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
            />
          </div>
          <div className="options">
            <label>
              <input 
                type="checkbox" 
                checked={rememberMe} 
                onChange={(e) => setRememberMe(e.target.checked)} 
              />
              Ricordami
            </label>
            <a href="#" className="forgot-password">Password dimenticata?</a>
          </div>
          <button onClick={handleLogin}>Procedi</button>
          <div className="register-button">
            Non hai un account? Prosegui ed effettua la registrazione
            <button>Registrati</button>
          </div>
        </div>
      ) : (
        <div className="logged-in-message">
          <h2>Benvenuto!</h2>
          <p>Hai effettuato l'accesso con successo.</p>
        </div>
      )}
    </div>
  );
}

export default App;
