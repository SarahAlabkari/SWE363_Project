import React, { useState, useEffect } from 'react';
import './Payment.css';
import MenuBar from "../components/MenuBar";

import TouristMenuBar from '../components/TouristMenuBar';

import { useNavigate } from 'react-router-dom';
import TestPopup from './TestPopup';


function PaymentPage() {
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [activitySummary, setActivitySummary] = useState({
    title: '',
    description: '',
    pricePerSeat: '',
    numberOfTickets: ''
  });
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvc, setCvc] = useState('');
  const [errors, setErrors] = useState({});
  const [popup, setPopup] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
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

  const validate = () => {
    const newErrors = {};
    if (!/\d{16}/.test(cardNumber.replace(/\s/g, ''))) {
      newErrors.cardNumber = 'Card number must be 16 digits';
    }
    if (!/^\d{2}\/\d{2}$/.test(expiry)) {
      newErrors.expiry = 'Expiry must be in MM/YY format';
    }
    if (!/^\d{3}$/.test(cvc)) {
      newErrors.cvc = 'CVC must be 3 digits';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (paymentMethod === 'apple') {
      setPopup({
        type: 'warning',
        title: 'Confirm Apple Pay',
        message: `Do you want to confirm paying ${getTotalPrice()} for ${activitySummary.title}?`,

        actions: [
          { label: 'Cancel', action: () => { setPopup(null); navigate('/Payment'); } },
          { label: 'Confirm', action: () => setPopup({
            type: 'success',
            title: 'Payment Successful',
            message: 'Your payment has been successfully processed!',
            actions: [{ label: 'See My Plan', action: () => navigate('/MyPlan') }]
          }) }
        ]
      });
    } else {
      if (validate()) {
        setPopup({
          type: 'success',
          title: 'Payment Successful',
          message: 'Your payment has been successfully processed!',
          actions: [{ label: 'See My Plan', action: () => navigate('/MyPlan') }]
        });
      } else {
        setPopup({
          type: 'danger',
          title: 'Payment Declined',
          message: 'Please enter valid card credentials.',
          actions: [{ label: 'OK', action: () => setPopup(null) }]
        });
      }
    }
  };

  const getTotalPrice = () => {
    const price = parseInt(activitySummary.pricePerSeat);
    const quantity = parseInt(activitySummary.numberOfTickets);
    return isNaN(price) || isNaN(quantity) ? '' : `${price * quantity} SAR`;
  };


  return (
    <div className="payment-page">
      <div className="menu-bar-wrapper">
      <TouristMenuBar/>
      </div>
      <h1 className="page-title" style={{ color: '#5c4033' }}>Pay & Confirm</h1>

      {popup && (
        <div style={{ position: 'fixed', top: '20px', left: '50%', transform: 'translateX(-50%)', zIndex: 1000, width: '100%', maxWidth: '600px' }}>
          <TestPopup
            title={popup.title}
            message={<>
              {popup.message}
              <div style={{ marginTop: '20px', display: 'flex', gap: '10px', justifyContent: 'center' }}>
                {popup.actions.map((btn, index) => (
                  <button key={index} onClick={btn.action} className="btn btn-sm btn-dark">
                    {btn.label}
                  </button>
                ))}
              </div>
            </>}
            type={popup.type}
          />
        </div>
      )}

      <div className="payment-layout">
        <div className="payment-form">
          <div className="payment-methods">
            <label className="payment-option" style={{ backgroundColor: '#ffffff', borderRadius: '12px', padding: '20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '15px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <input type="radio" name="method" value="apple" checked={paymentMethod === 'apple'} onChange={() => setPaymentMethod('apple')} />
                
                <span className="payment-text" style={{ whiteSpace: 'nowrap', fontSize: '18px', minWidth: '160px' }}>
                  Apple Pay
                </span>

              </div>
              <img src="/apple-pay.png" alt="Apple Pay" className="payment-icon" />
            </label>

            <label className="payment-option" style={{ backgroundColor: '#ffffff', borderRadius: '12px', padding: '20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '15px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <input type="radio" name="method" value="card" checked={paymentMethod === 'card'} onChange={() => setPaymentMethod('card')} />
                
                <span className="payment-text" style={{ whiteSpace: 'nowrap', fontSize: '18px', minWidth: '160px' }}>
                Debit / Credit Card
                </span>

              </div>
              <div className="card-icons" style={{ display: 'flex', gap: '12px' }}>
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
                <input type="text" placeholder="1234 5678 9012 3456" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} onBlur={validate} style={{ backgroundColor: '#ffffff' }} />
                {errors.cardNumber && <span className="error-text">{errors.cardNumber}</span>}
              </label>
              <div className="row">
                <div className="form-group half-width">
                  <label>
                    Expiry
                    <input type="text" placeholder="MM/YY" value={expiry} onChange={(e) => setExpiry(e.target.value)} onBlur={validate} style={{ backgroundColor: '#ffffff' }} />
                    {errors.expiry && <span className="error-text">{errors.expiry}</span>}
                  </label>
                </div>
                <div className="form-group half-width">
                  <label>
                    CVC
                    <input type="text" placeholder="123" value={cvc} onChange={(e) => setCvc(e.target.value)} onBlur={validate} style={{ backgroundColor: '#ffffff' }} />
                    {errors.cvc && <span className="error-text">{errors.cvc}</span>}
                  </label>
                </div>
              </div>
              <label>
                Total Price
                <input type="text" value={getTotalPrice()} readOnly style={{ backgroundColor: '#ffffff' }} />
              </label>
            </div>
          )}
        </div>

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
        <button className="confirm-button" onClick={handleSubmit}>Pay & Confirm</button>
      </div>
    </div>
  );
}

export default PaymentPage;
