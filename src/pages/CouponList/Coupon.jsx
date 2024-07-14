import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaCog, FaHome, FaEnvelope, FaTicketAlt } from 'react-icons/fa';
import './Coupon.css';
import noImg from '../../public/images/noimg.png'; 

const Coupon = () => {
  const coupons = [
    { id: 1, name: 'Coupon 1', description: 'Descrizione del Coupon 1', discount: '-20€', image: noImg },
    { id: 2, name: 'Coupon 2', description: 'Descrizione del Coupon 2', discount: '-15€', image: noImg },
    { id: 3, name: 'Coupon 3', description: 'Descrizione del Coupon 3', discount: '-10€', image: noImg },
    { id: 4, name: 'Coupon 4', description: 'Descrizione del Coupon 4', discount: '-30€', image: noImg },
    { id: 5, name: 'Coupon 5', description: 'Descrizione del Coupon 5', discount: '-25€', image: noImg },
    { id: 6, name: 'Coupon 6', description: 'Descrizione del Coupon 6', discount: '-35€', image: noImg },
    { id: 7, name: 'Coupon 7', description: 'Descrizione del Coupon 7', discount: '-18€', image: noImg },
    { id: 8, name: 'Coupon 8', description: 'Descrizione del Coupon 8', discount: '-12€', image: noImg },
  ];

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
            <img src={coupon.image} alt={`Immagine del coupon ${coupon.name}`} className="coupon-image" />
            <div className="coupon-details">
              <h3>{coupon.name}</h3>
              <p>{coupon.description}</p>
            </div>
            <p className="coupon-discount">{coupon.discount}</p>
          </li>
        ))}
      </ul>
      <div className="menu">
        <button onClick={() => handleMenuClick('Menu 1')}>
          <FaHome className="icon" />
        </button>
        <button onClick={() => handleMenuClick('Menu 2')}>
          <FaTicketAlt className="icon" />
        </button>
        <button onClick={() => handleMenuClick('Menu 3')}>
          <FaEnvelope className="icon" />
        </button>
        <button onClick={() => handleMenuClick('Menu 4')}>
          <FaCog className="icon" />
        </button>
      </div>
    </div>
  );
};

export default Coupon;
