import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // ✅ On mount, check localStorage
  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      // Auto-redirect if already logged in
      navigate('/');
    }
  }, [navigate]);

  const handleLogin = (e) => {
    e.preventDefault();

    // Dummy login check
    if (email === 'user@example.com' && password === 'password123') {
      const userData = { email }; // or token if from real API

      // ✅ Save to localStorage
      localStorage.setItem('user', JSON.stringify(userData));

      setError('');
      console.log('Login successful!');
      navigate('/');
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <div style={styles.container}>
      <form onSubmit={handleLogin} style={styles.form}>
        <h2 style={styles.heading}>Login</h2>

        {error && <p style={styles.error}>{error}</p>}

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={styles.input}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={styles.input}
        />

        <button type="submit" style={styles.button}>Login</button>
        <p style={{ marginTop: '10px', textAlign: 'center' }}>
          If you have not an account? <a href="/signup">Register</a>
        </p>
      </form>
    </div>
  );
};

const styles = {
  container: {
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: '#FFE6CC',
  },
  form: {
    padding: '30px',
    borderRadius: '8px',
    background: '#fff',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
    width: '300px',
    display: 'flex',
    flexDirection: 'column',
  },
  heading: {
    marginBottom: '20px',
    textAlign: 'center',
  },
  input: {
    padding: '10px',
    marginBottom: '15px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    fontSize: '16px',
  },
  button: {
    padding: '10px',
    background: '#ff6600',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    fontSize: '16px',
    cursor: 'pointer',
  },
  error: {
    color: 'red',
    marginBottom: '10px',
    textAlign: 'center',
  }
};

export default LoginPage;
