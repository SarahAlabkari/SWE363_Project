import React, { useState, useEffect } from 'react';
import './Payment.css';
import MenuBar from "../components/MenuBar";
import TouristMenuBar from '../components/TouristMenuBar';
import { useNavigate } from 'react-router-dom';
import Popup from '../components/Popup';

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
  const [popupProps, setPopupProps] = useState(null);
  const [nextPopup, setNextPopup] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const mockData = {
      title: 'AlUla Heritage Tour',
      description: 'Explore the stunning landscapes and historical sites of AlUla with a local guide.',
      pricePerSeat: '250 SAR',
      numberOfTickets: '2'
    };
    setActivitySummary(mockData);
  }, []);

  const validate = (field) => {
    const newErrors = { ...errors };
    if (!field || field === 'cardNumber') {
      newErrors.cardNumber = /^[0-9]{16}$/.test(cardNumber.replace(/\s/g, '')) ? '' : 'Card number must be 16 digits';
    }
    if (!field || field === 'expiry') {
      newErrors.expiry = /^\d{2}\/\d{2}$/.test(expiry) ? '' : 'Expiry must be in MM/YY format';
    }
    if (!field || field === 'cvc') {
      newErrors.cvc = /^\d{3}$/.test(cvc) ? '' : 'CVC must be 3 digits';
    }
    setErrors(newErrors);
    if (!field) return Object.values(newErrors).every(err => !err);
  };

  const getTotalPrice = () => {
    const price = parseInt(activitySummary.pricePerSeat);
    const quantity = parseInt(activitySummary.numberOfTickets);
    return isNaN(price) || isNaN(quantity) ? '' : `${price * quantity} SAR`;
  };

  const showSuccessPopup = () => {
    setPopupProps({
      title: 'Payment Successful',
      message: 'Your payment has been successfully processed!',
      type: 'success',
      showConfirm: true,
      onConfirm: () => setPopupProps(null) || navigate('/MyPlan')
    });
  };

  const handleSubmit = () => {
    if (paymentMethod === 'apple') {
      setPopupProps({
        title: 'Confirm Apple Pay',
        message: `Do you want to confirm paying ${getTotalPrice()} for ${activitySummary.title}?`,
        type: 'warning',
        showConfirm: true,
        showCancel: true,
        onConfirm: () => {
          setPopupProps(null);
          setNextPopup(() => showSuccessPopup);
        },
        onCancel: () => setPopupProps(null) || navigate('/MyPlan')
      });
    } else {
      if (validate()) {
        showSuccessPopup();
      } else {
        setPopupProps({
          title: 'Payment Declined',
          message: 'Please enter valid card credentials.',
          type: 'danger',
          showConfirm: true,
          onConfirm: () => setPopupProps(null)
        });
      }
    }
  };

  useEffect(() => {
    if (nextPopup) {
      nextPopup();
      setNextPopup(null);
    }
  }, [nextPopup]);

  return (
    <div className="payment-page" style={{ position: 'relative' }}>
      <div className="menu-bar-wrapper">
        <TouristMenuBar />
      </div>
      <h1 className="page-title" style={{ color: '#5c4033' }}>Pay & Confirm</h1>

      {popupProps && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.4)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 9999
        }}>
          <Popup {...popupProps} />
        </div>
      )}

      <div className="payment-layout">
        <div className="payment-form">
          <div className="payment-methods">
            <label className="payment-option">
              <div>
                <input type="radio" name="method" value="apple" checked={paymentMethod === 'apple'} onChange={() => setPaymentMethod('apple')} />
                <span>Apple Pay</span>
              </div>
              <img src="/apple-pay.png" alt="Apple Pay" className="payment-icon" />
            </label>

            <label className="payment-option">
              <div>
                <input type="radio" name="method" value="card" checked={paymentMethod === 'card'} onChange={() => setPaymentMethod('card')} />
                <span>Debit / Credit Card</span>
              </div>
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
                <input
                  type="text"
                  placeholder="1234 5678 9012 3456"
                  value={cardNumber}
                  onChange={(e) => setCardNumber(e.target.value)}
                  onBlur={() => validate('cardNumber')}
                />
                {errors.cardNumber && <span className="error-text">{errors.cardNumber}</span>}
              </label>
              <div className="row">
                <div className="form-group half-width">
                  <label>
                    Expiry
                    <input
                      type="text"
                      placeholder="MM/YY"
                      value={expiry}
                      onChange={(e) => setExpiry(e.target.value)}
                      onBlur={() => validate('expiry')}
                    />
                    {errors.expiry && <span className="error-text">{errors.expiry}</span>}
                  </label>
                </div>
                <div className="form-group half-width">
                  <label>
                    CVC
                    <input
                      type="text"
                      placeholder="123"
                      value={cvc}
                      onChange={(e) => setCvc(e.target.value)}
                      onBlur={() => validate('cvc')}
                    />
                    {errors.cvc && <span className="error-text">{errors.cvc}</span>}
                  </label>
                </div>
              </div>
              <label>
                Total Price
                <input type="text" value={getTotalPrice()} readOnly />
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
