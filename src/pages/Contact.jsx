// src/pages/Contact.jsx
import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent successfully!');
    setFormData({ name: '', email: '', message: '' });
    // You can add API call here
  };

  return (
    <div style={styles.container}>
      {/* Left: Contact Info */}
      <div style={styles.left}>
        <h2 style={styles.heading}>Contact Us</h2>
        <p style={styles.text}>Have questions or want to place an order? Reach out to us!</p>
        <div style={styles.infoBox}>
          <p><strong>Phone:</strong> +971 123 4567</p>
          <p><strong>Email:</strong> support@bitebuddy.com</p>
          <p><strong>Address:</strong> 123 Foodie Street, Dubai, UAE</p>
        </div>
      </div>

      {/* Right: Contact Form */}
      <div style={styles.right}>
        <h2 style={styles.heading}>Send Us a Message</h2>
        <form style={styles.form} onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            style={styles.input}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            style={styles.input}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            style={{ ...styles.input, height: '120px', resize: 'none' }}
            required
          />
          <button type="submit" style={styles.button}>Send Message</button>
        </form>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    gap: '50px',
    padding: '50px',
    flexWrap: 'wrap',
    justifyContent: 'center',
    backgroundColor: '#fff5f0',
  },
  left: {
    flex: 1,
    minWidth: '300px',
    padding: '20px',
  },
  right: {
    flex: 1,
    minWidth: '300px',
    padding: '20px',
    backgroundColor: '#fff',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
  },
  heading: {
    fontSize: '24px',
    fontWeight: '600',
    color: '#ff6600',
    marginBottom: '15px',
  },
  text: {
    fontSize: '14px',
    marginBottom: '20px',
    color: '#555',
  },
  infoBox: {
    fontSize: '14px',
    lineHeight: '1.8',
    color: '#333',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
  },
  input: {
    padding: '12px 15px',
    borderRadius: '8px',
    border: '1px solid #ccc',
    fontSize: '14px',
    outline: 'none',
    transition: 'border-color 0.3s',
  },
  button: {
    padding: '14px 0',
    backgroundColor: '#ff6600',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    fontSize: '16px',
    fontWeight: '500',
    cursor: 'pointer',
    transition: 'background 0.3s',
  },
};

export default Contact;
