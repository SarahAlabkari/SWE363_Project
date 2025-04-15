import React, { useState, useEffect } from 'react';

import './Payment.css';
import MenuBar from "../components/MenuBar";

function PaymentPage() {
  const [paymentMethod, setPaymentMethod] = useState('card');

  const [activitySummary, setActivitySummary] = useState({
    title: '',
    description: '',
    pricePerSeat: '',
    numberOfTickets: ''
  });

  useEffect(() => {
    // This will be fetched later with real data 
    const fetchSummary = async () => {
      
      const mockData = {
        title: 'AlUla Heritage Tour',
        description: 'Explore the stunning landscapes and historical sites of AlUla with a local guide.',
        pricePerSeat: '250 SAR',
        numberOfTickets: '2'
      };

      setActivitySummary(mockData);
    };

    fetchSummary();
  }, []);

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "About", path: "/" },
    { label: "Where To?", path: "/WhereTo" },
    { label: "Find a Local", path: "/pages/TourGuides" },
    { label: "My Plan", path: "/" },
    { label: "Wishlist", path: "/" },
    { label: "Login", path: "/" },
  ];

  return (
    <div className="payment-page">
      <div className="menu-bar-wrapper">
        <MenuBar links={navLinks} />
      </div>

     
      
      <h1 className="page-title" style={{ color: '#5c4033' }}>Pay & Confirm</h1>

      <div className="payment-layout">
        {/* Payment Form */}
        <div className="payment-form">
          <div className="payment-methods">
            <label className="payment-option">
              <input
                type="radio"
                name="method"
                value="apple"
                checked={paymentMethod === 'apple'}
                onChange={() => setPaymentMethod('apple')}
              />
              <span className="payment-text">Apple Pay</span>
              <img src="/apple-pay.png" alt="Apple Pay" className="payment-icon" />
            </label>

            <label className="payment-option">
              <input
                type="radio"
                name="method"
                value="card"
                checked={paymentMethod === 'card'}
                onChange={() => setPaymentMethod('card')}
              />
              <span className="payment-text">Debit / Credit Card</span>
              <div className="card-icons">
                <img src="/visa.png" alt="Visa" className="payment-icon" />
                <img src="/Master2.png" alt="Mastercard" className="payment-icon" />
                <img src="/Mada.png" alt="Mada" className="payment-icon" />
              </div>
            </label>
          </div>

          {paymentMethod === 'card' && (
            <div className="card-info">
              <label>
                Card Number
                <input type="text" placeholder="1234 5678 9012 3456" />
              </label>
              <div className="row">
                <div className="form-group half-width">
                  <label>
                    Expiry
                    <input type="text" placeholder="MM/YY" />
                  </label>
                </div>
                <div className="form-group half-width">
                  <label>
                    CVC
                    <input type="text" placeholder="123" />
                  </label>
                </div>
              </div>
              <label>
                Total Price
                <input type="text" value="" readOnly />
              </label>
            </div>
          )}
        </div>

        {/* Summary Section */}
        <div className="summary-box">
          <h2>Summary</h2>
          <div className="summary-content">
            <p><strong>{activitySummary.title || 'Activity Title'}</strong></p>
            <p>{activitySummary.description || 'Description'}</p>
          </div>
          <div className="summary-footer">
            <div className="summary-line">
              <span>Price/Seat:</span>
              <span>{activitySummary.pricePerSeat || '-'}</span>
            </div>
            <div className="summary-line">
              <span>Number of Tickets:</span>
              <span>{activitySummary.numberOfTickets || '-'}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="confirm-btn-wrapper">
        <button className="confirm-button">Pay & Confirm</button>
      </div>
    </div>
  );
}

export default PaymentPage;
