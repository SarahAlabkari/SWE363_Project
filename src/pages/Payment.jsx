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

  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvc, setCvc] = useState('');
  const [errors, setErrors] = useState({});

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

  const navLinks = [
    { label: "Home", path: "/pages/Home" },
    { label: "About", path: "/pages/About" },
    { label: "Where To?", path: "/WhereTo" },
    { label: "Find a Local", path: "/pages/TourGuides" },
    { label: "My Plan", path: "/pages/MyPlan" },
    { label: "Wishlist", path: "/pages/MyWishlist" },
    { label: "Login", path: "/" },
  ];

  const validate = () => {
    const newErrors = {};
    if (!/^\d{16}$/.test(cardNumber.replace(/\s/g, ''))) {
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
    if (validate()) {
      console.log("Valid - proceed with payment");
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
        <MenuBar links={navLinks} />
      </div>

      <h1 className="page-title" style={{ color: '#5c4033' }}>Pay & Confirm</h1>

      <div className="payment-layout">
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
                <input type="text" placeholder="1234 5678 9012 3456" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} onBlur={validate} />
                {errors.cardNumber && <span className="error-text">{errors.cardNumber}</span>}
              </label>
              <div className="row">
                <div className="form-group half-width">
                  <label>
                    Expiry
                    <input type="text" placeholder="MM/YY" value={expiry} onChange={(e) => setExpiry(e.target.value)} onBlur={validate} />
                    {errors.expiry && <span className="error-text">{errors.expiry}</span>}
                  </label>
                </div>
                <div className="form-group half-width">
                  <label>
                    CVC
                    <input type="text" placeholder="123" value={cvc} onChange={(e) => setCvc(e.target.value)} onBlur={validate} />
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
