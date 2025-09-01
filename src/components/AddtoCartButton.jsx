import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../features/cartSlice'; 
const AddToCartButton = () => {
  const [quantity, setQuantity] = useState(0);
  const handleAddToCart = () => {
    setQuantity(1);
  };

  const handleIncrease = () => {
    setQuantity(prev => prev + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    } else {
      setQuantity(0); // Go back to "Add to Cart" if quantity is 1
    }
  };

  return (
    <div style={styles.container}>
      {quantity === 0 ? (
        <button onClick={handleAddToCart} style={styles.addToCartButton}>
          Add to Cart
        </button>
      ) : (
        <div style={styles.counterContainer}>
          <button onClick={handleDecrease} style={styles.counterButton}>-</button>
          <span style={styles.quantity}>{quantity}</span>
          <button onClick={handleIncrease} style={styles.counterButton}>+</button>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    display: 'inline-block',
    fontFamily: 'Arial, sans-serif',
  },
  addToCartButton: {
    padding: '10px 20px',
    backgroundColor: '#28a745',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  counterContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
  counterButton: {
    padding: '8px 14px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    fontSize: '16px',
    cursor: 'pointer',
  },
  quantity: {
    fontSize: '16px',
    minWidth: '20px',
    textAlign: 'center',
  },
};

export default AddToCartButton;
