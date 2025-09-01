import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignUpPage = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignUp = (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
      setError('All fields are required.');
      return;
    }

    const newUser = { name, email, password };

    // Save user to localStorage (you can store multiple users if needed)
    localStorage.setItem('user', JSON.stringify(newUser));

    setError('');
    console.log('Sign-up successful!');
    navigate('/login');

    // Redirect to login page or dashboard
    // navigate('Login');
  };

  return (
    <div style={styles.container}>
      <form onSubmit={handleSignUp} style={styles.form}>
        <h2 style={styles.heading}>Sign Up</h2>

        {error && <p style={styles.error}>{error}</p>}

        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          style={styles.input}
        />

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

        <button type="submit" style={styles.button}>Sign Up</button>

        <p style={{ marginTop: '10px', textAlign: 'center' }}>
          Already have an account? <a href="/login">Login</a>
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
    background: '#f9f9f9',
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

export default SignUpPage;
