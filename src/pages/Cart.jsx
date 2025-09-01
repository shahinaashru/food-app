// src/pages/Cart.jsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart
} from '../features/cartSlice';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector(state => state.cart.items);

  // Calculate totals
  const subtotal = cartItems.reduce((sum, item) => sum + (item.price || 0) * item.quantity, 0);
  const vat = subtotal * 0.05; // Example: 5% VAT
  const total = subtotal + vat;

  const handleCheckout = () => navigate('/checkout');

  if (cartItems.length === 0) {
    return <h2 style={{ padding: '20px' }}>Your cart is empty.</h2>;
  }

  return (
    <div style={styles.container}>
      {/* Left side: items */}
      <div style={styles.left}>
        <h2>Your Cart</h2>
        {cartItems.map(item => (
          <div key={item.id} style={styles.item}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
              <img
                src={`../src/images/${item.image}.jpg`}
                alt={item.title}
                style={{ width: '120px', height: '120px', objectFit: 'cover', borderRadius: '15px' }}
              />
              <div>
                <h4 style={{ fontSize: '16px', fontWeight: 'normal' }}>{item.title}</h4>
                <p>Price: ${(item.price || 0).toFixed(2)}</p>
              </div>
            </div>

            <div style={styles.quantityControl}>
              <button onClick={() => dispatch(decreaseQuantity(item.id))} style={styles.qtyBtn}>-</button>
              <span style={styles.qtyNumber}>{item.quantity}</span>
              <button onClick={() => dispatch(increaseQuantity(item.id))} style={styles.qtyBtn}>+</button>
            </div>

            <button onClick={() => dispatch(removeFromCart(item.id))} style={styles.removeBtn}>
              Remove
            </button>
          </div>
        ))}
      </div>

      {/* Right side: summary */}
      <div style={styles.right}>
        <h3>Order Summary</h3>
        <div style={styles.summaryRow}>
          <span>Subtotal:</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <div style={styles.summaryRow}>
          <span>VAT (5%):</span>
          <span>${vat.toFixed(2)}</span>
        </div>
        <div style={{ ...styles.summaryRow, fontWeight: 'bold', fontSize: '18px', marginTop: '10px' }}>
          <span>Total:</span>
          <span>${total.toFixed(2)}</span>
        </div>

        <button style={styles.checkoutBtn} onClick={handleCheckout}>
          Proceed to Checkout
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
    flexWrap: 'wrap', // responsive for small screens
  },
  left: {
    flex: 2,
  },
  right: {
    flex: 1,
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '10px',
    backgroundColor: '#fff8f0',
    height: 'fit-content',
  },
  item: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '1px solid #ccc',
    padding: '15px 0',
  },
  quantityControl: {
    display: 'flex',
    alignItems: 'center',
    background: '#FFE8CC',
    borderRadius: '25px',
    padding: '5px 15px',
    gap: '10px',
  },
  qtyBtn: {
    backgroundColor: '#FFE8CC',
    color: '#AB5400',
    border: 'none',
    width: '30px',
    height: '30px',
    borderRadius: '50%',
    cursor: 'pointer',
    fontWeight: 'bold',
    fontSize: '20px',
  },
  qtyNumber: {
    fontWeight: 'bold',
    minWidth: '20px',
    textAlign: 'center',
    color:'#AB5400'
  },
  removeBtn: {
    backgroundColor: '#AB5400',
    color: '#fff',
    border: 'none',
    padding: '5px 10px',
    cursor: 'pointer',
    borderRadius: '4px',
  },
  summaryRow: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '10px 0',
  },
  checkoutBtn: {
    width: '100%',
    marginTop: '20px',
    backgroundColor: '#ff6600',
    color: '#fff',
    border: 'none',
    padding: '12px 0',
    fontSize: '16px',
    cursor: 'pointer',
    borderRadius: '5px',
  },
};

export default Cart;
