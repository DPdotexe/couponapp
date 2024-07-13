import React, { useState } from 'react'; 
import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from 'react-icons/fa'; 
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom'; 
import './App.css'; 
import Coupon from './pages/CouponList/Coupon'; 

function Login() {
  // stati locali
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false); 
  const navigate = useNavigate(); 

  // fumzuione per gestire il login
  const handleLogin = () => {
    if (email && password) {
      navigate('/coupons'); 
    }
  };

  // toggle visibilità
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="login-container"> 
      <div className="logo-container">
        <div className="logo">LOGO</div> 
      </div>
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
          type={showPassword ? 'text' : 'password'} 
          placeholder="Password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
        />
        <div className="icon" onClick={togglePasswordVisibility}>
          {showPassword ? <FaEyeSlash /> : <FaEye />} 
        </div>
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
      <button className="login-button" onClick={handleLogin}>Procedi</button>
      <div className="register-container">
        <p>Non hai un account? Prosegui ed effettua la registrazione</p> 
        <button className="register-button">Registrati</button> 
      </div>
    </div>
  );
}

// routing 
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} /> 
        <Route path="/coupons" element={<Coupon />} /> 
      </Routes>
    </Router>
  );
}

export default App;
