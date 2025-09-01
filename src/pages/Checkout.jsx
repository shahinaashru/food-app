// src/pages/Checkout.jsx
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import PaymentForm from '../pages/PaymentForm';

const Checkout = () => {
  const cartItems = useSelector(state => state.cart.items);
  const navigate = useNavigate();

  const [billingInfo, setBillingInfo] = useState({
    fullName: '',
    email: '',
    address: '',
    city: '',
    zip: '',
    country: '',
  });

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price || 0) * item.quantity, 0);
  const vat = subtotal * 0.05; // 5% VAT
  const total = subtotal + vat;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBillingInfo(prev => ({ ...prev, [name]: value }));
  };

  const handlePlaceOrder = () => {
    alert('Order placed successfully!');
    navigate('/');
  };

  return (
    <div style={styles.container}>
      {/* Left: Billing / Shipping Form */}
      <div style={styles.left}>
        <h2 style={styles.heading}>Billing & Shipping Details</h2>
        <form style={styles.form}>
          <input type="text" name="fullName" placeholder="Full Name" value={billingInfo.fullName} onChange={handleInputChange} style={styles.input} />
          <input type="email" name="email" placeholder="Email" value={billingInfo.email} onChange={handleInputChange} style={styles.input} />
          <textarea name="address" placeholder="Address" value={billingInfo.address} onChange={handleInputChange} style={{...styles.input, height: '60px', resize: 'none'}} />
          <input type="text" name="city" placeholder="City" value={billingInfo.city} onChange={handleInputChange} style={styles.input} />
          <input type="text" name="zip" placeholder="ZIP / Postal Code" value={billingInfo.zip} onChange={handleInputChange} style={styles.input} />
          <input type="text" name="country" placeholder="Country" value={billingInfo.country} onChange={handleInputChange} style={styles.input} />
        </form>

        <h3 style={styles.heading}>Payment Method</h3>
        <PaymentForm />
      </div>

      {/* Right: Fixed Order Summary */}
      <div style={styles.right}>
        <h3 style={styles.heading}>Order Summary</h3>
        {cartItems.map(item => (
          <div key={item.id} style={styles.item}>
            <span>{item.title} x {item.quantity}</span>
            <span>${(item.price * item.quantity).toFixed(2)}</span>
          </div>
        ))}
        <div style={styles.summaryRow}>
          <span>Subtotal</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <div style={styles.summaryRow}>
          <span>VAT (5%)</span>
          <span>${vat.toFixed(2)}</span>
        </div>
        <div style={{ ...styles.summaryRow, fontWeight: 'bold', fontSize: '18px' }}>
          <span>Total</span>
          <span>${total.toFixed(2)}</span>
        </div>
        <button style={styles.placeOrderBtn} onClick={handlePlaceOrder}>
          Place Order
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    gap: '30px',
    padding: '20px',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
  },
  left: {
    flex: 2,
    minWidth: '320px',
  },
  heading: {
    marginBottom: '15px',
    color: '#333',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
    marginBottom: '30px',
  },
  input: {
    padding: '12px 15px',
    borderRadius: '8px',
    border: '1px solid #ccc',
    fontSize: '14px',
    outline: 'none',
    transition: 'border-color 0.3s',
  },
  inputFocus: {
    borderColor: '#ff6600',
  },
  right: {
    flex: 1,
    minWidth: '280px',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '10px',
    backgroundColor: '#fff8f0',
    position: 'sticky',
    top: '200px',
    height: 'fit-content',
  },
  item: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '10px',
  },
  summaryRow: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '10px 0',
  },
  placeOrderBtn: {
    width: '100%',
    backgroundColor: '#ff6600',
    color: '#fff',
    border: 'none',
    padding: '15px 0',
    fontSize: '16px',
    cursor: 'pointer',
    borderRadius: '8px',
    marginTop: '20px',
    transition: 'background 0.3s',
  },
};

export default Checkout;
