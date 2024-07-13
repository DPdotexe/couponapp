import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import './Coupon.css';

function Coupon() {
  // array coupon 
  const coupons = [
    { id: 1, name: 'Coupon 1', description: 'Descrizione del Coupon 1' },
    { id: 2, name: 'Coupon 2', description: 'Descrizione del Coupon 2' },
    { id: 3, name: 'Coupon 3', description: 'Descrizione del Coupon 3' },
    { id: 4, name: 'Coupon 4', description: 'Descrizione del Coupon 4' },
    { id: 5, name: 'Coupon 5', description: 'Descrizione del Coupon 5' },
    { id: 6, name: 'Coupon 6', description: 'Descrizione del Coupon 6' },
    { id: 7, name: 'Coupon 7', description: 'Descrizione del Coupon 7' },
    { id: 8, name: 'Coupon 8', description: 'Descrizione del Coupon 8' },
  ];

  // funzione click menu
  const handleMenuClick = (menuItem) => {
    alert(`Hai cliccato su ${menuItem}`);
  };

  return (
    <div className="coupon-list"> 
      <Link to="/" className="back-link">
        <FaArrowLeft className="icon" /> 
      </Link>
      <h2>Lista Coupon</h2> 
      <ul>

        {coupons.map((coupon) => (
          <li key={coupon.id} className="coupon-item"> 
            <h3>{coupon.name}</h3> 
            <p>{coupon.description}</p> 
          </li>
        ))}
      </ul>
      <div className="menu"> 
        <button onClick={() => handleMenuClick('Menu 1')}>
          <i className="icon">i</i> Menu 1
        </button>
        <button onClick={() => handleMenuClick('Menu 2')}>
          <i className="icon">i</i> Menu 2
        </button>
        <button onClick={() => handleMenuClick('Menu 3')}>
          <i className="icon">i</i> Menu 3
        </button>
        <button onClick={() => handleMenuClick('Menu 4')}>
          <i className="icon">i</i> Menu 4
        </button>
      </div>
    </div>
  );
}

export default Coupon;
