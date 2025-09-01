import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addToCart,
  increaseQuantity,
  decreaseQuantity
} from '../features/cartSlice';

const counterContainerStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#fff',
  borderRadius: '20px',
  padding: '2px 2px',
  boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
  gap: '12px',
  width: '120px',
  marginTop: '10px',
  backgroundColor: '#ffe6cc'
};

const counterButtonStyle = {
  background: 'none',
  border: 'none',
  fontSize: '24px',
  color: '#AB5400',
  cursor: 'pointer',
  fontWeight: 'bold',
  backgroundColor: '#ffe6cc'
};

const quantityTextStyle = {
  fontSize: '20px',
  fontWeight: 'bold',
  color: '#AB5400',
  minWidth: '20px',
  textAlign: 'center',
  backgroundColor: '#ffe6cc'
};

const addButtonStyle = {
  padding: '8px 12px',
  backgroundColor: '#AB5400',
  color: 'white',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
  marginTop: '10px'
};

export default function ProductCard({ product }) {
  const dispatch = useDispatch();

  // Ensure the product object is valid before accessing its properties
  if (!product || !product.id || !product.image || !product.title || !product.price) {
    return <div>Invalid product data</div>;
  }

  const cartItem = useSelector(state =>
    state.cart.items.find(item => item.id === product.id)
  );

  const handleAdd = () => dispatch(addToCart(product));
  const handleIncrease = () => dispatch(increaseQuantity(product.id));
  const handleDecrease = () => dispatch(decreaseQuantity(product.id));

  return (
    <div style={{
      border: '1px solid #ccc',
      padding: '20px',
      margin: '0.5rem',
      width: '200px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      borderRadius: '8px',
      backgroundColor: '#fff'
    }}>
      <img
        src={`/src/images/${product.image}.jpg`}
        alt={product.title}
        style={{ width: '200px', height: '100px', objectFit: 'contain' }}
      />
      <h4 style={{ fontSize: '16px', fontWeight: 'normal' }}>{product.title}</h4>
      <p>${product.price}</p>

      {cartItem ? (
        <div style={counterContainerStyle}>
          <button
            style={counterButtonStyle}
            onClick={handleDecrease}
            disabled={cartItem.quantity <= 1}
          >
            −
          </button>
          <span style={quantityTextStyle}>{cartItem.quantity}</span>
          <button style={counterButtonStyle} onClick={handleIncrease}>+</button>
        </div>
      ) : (
        <button onClick={handleAdd} style={addButtonStyle}>Add to Cart</button>
      )}
    </div>
  );
}
