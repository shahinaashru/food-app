// src/components/PaymentForm.jsx
import React, { useState } from 'react';

const PaymentForm = () => {
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [useShippingAddress, setUseShippingAddress] = useState(true);
  const [cardDetails, setCardDetails] = useState({
    cardNumber: '',
    expiry: '',
    securityCode: '',
    name: ''
  });

  const handleCardChange = (e) => {
    const { name, value } = e.target;
    setCardDetails(prev => ({ ...prev, [name]: value }));
  };

  const handlePayNow = () => {
    alert('Payment processed successfully!');
  };

  return (
    <div style={styles.container}>
      {/* Credit Card Option */}
      <label style={styles.radioLabel}>
        <input
          type="radio"
          name="paymentMethod"
          value="card"
          checked={paymentMethod === 'card'}
          onChange={() => setPaymentMethod('card')}
        />
        <span style={styles.radioText}>Credit card</span>
        <span style={styles.cardIcons}>
          <img src="../src/images/visa.webp" alt="Visa" style={styles.icon}/>
          <img src="../src/images/master.webp" alt="Mastercard" style={styles.icon}/>
          <img src="../src/images/amex.webp" alt="Amex" style={styles.icon}/>
        </span>
      </label>

      {paymentMethod === 'card' && (
        <div style={styles.cardForm}>
          <input
            type="text"
            name="cardNumber"
            placeholder="Card number"
            value={cardDetails.cardNumber}
            onChange={handleCardChange}
            style={styles.input}
          />
          <div style={styles.row}>
            <input
              type="text"
              name="expiry"
              placeholder="Expiration date (MM / YY)"
              value={cardDetails.expiry}
              onChange={handleCardChange}
              style={{ ...styles.input, flex: 1 }}
            />
            <input
              type="text"
              name="securityCode"
              placeholder="Security code"
              value={cardDetails.securityCode}
              onChange={handleCardChange}
              style={{ ...styles.input, flex: 1, marginLeft: '10px' }}
            />
          </div>
          <input
            type="text"
            name="name"
            placeholder="Name on card"
            value={cardDetails.name}
            onChange={handleCardChange}
            style={styles.input}
          />
          <label style={styles.checkboxLabel}>
            <input
              type="checkbox"
              checked={useShippingAddress}
              onChange={() => setUseShippingAddress(prev => !prev)}
            />
            Use shipping address as billing address
          </label>
        </div>
      )}

      {/* Alternative Payment Option */}
      <label style={styles.radioLabel}>
        <input
          type="radio"
          name="paymentMethod"
          value="tabby"
          checked={paymentMethod === 'tabby'}
          onChange={() => setPaymentMethod('tabby')}
        />
        <span style={styles.radioText}>Pay later with Tabby</span>
        <span style={styles.tabbyIcon}>tabby</span>
      </label>

      {/* Pay Now Button */}
      {/* <button style={styles.payBtn} onClick={handlePayNow}>
        Pay now
      </button> */}
    </div>
  );
};

const styles = {
  container: {
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '20px',
    backgroundColor: '#fff',
    maxWidth: '400px',
  },
  radioLabel: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    marginBottom: '15px',
    fontWeight: '500',
  },
  radioText: {
    marginLeft: '5px',
  },
  cardIcons: {
    marginLeft: 'auto',
    display: 'flex',
    gap: '5px'
  },
  icon: {
    width: '40px',
    height: '24px',
    objectFit: 'contain'
  },
  cardForm: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    marginBottom: '15px',
  },
  input: {
    padding: '10px',
    borderRadius: '6px',
    border: '1px solid #ccc',
    fontSize: '14px',
    width: '100%',
  },
  row: {
    display: 'flex',
    gap: '10px'
  },
  checkboxLabel: {
    display: 'flex',
    alignItems: 'center',
    gap: '5px',
    fontSize: '14px',
    marginTop: '5px'
  },
  tabbyIcon: {
    marginLeft: 'auto',
    backgroundColor: '#1ABC9C',
    color: '#fff',
    padding: '2px 8px',
    borderRadius: '4px',
    fontSize: '12px',
    fontWeight: 'bold',
  },
  payBtn: {
    width: '100%',
    padding: '12px',
    backgroundColor: '#6b3e0e', // brown as in your image
    color: '#fff',
    fontWeight: 'bold',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    marginTop: '10px'
  }
};

export default PaymentForm;
