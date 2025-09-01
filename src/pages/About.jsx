// src/pages/About.jsx
import React from 'react';

const About = () => {
  return (
    <div style={styles.container}>
      {/* Hero Section */}
      <section style={styles.hero}>
        <h1 style={styles.heroTitle}>About BiteBuddy</h1>
        <p style={styles.heroText}>
          Foodie is your go-to platform for fresh, delicious meals delivered straight to your door. We bring convenience, quality, and flavor together in one seamless experience.
        </p>
      </section>

      {/* Mission / Story */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Our Mission</h2>
        <p style={styles.sectionText}>
          Our mission is to make quality food accessible to everyone. We partner with local chefs and restaurants to deliver meals that are fresh, tasty, and affordable. From farm to table, we care about every step.
        </p>
      </section>

      {/* Features / Highlights */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Why Choose Us</h2>
        <div style={styles.cards}>
          <div style={styles.card}>
            <h3 style={styles.cardTitle}>Fast Delivery</h3>
            <p style={styles.cardText}>Get your food delivered hot and fresh in under 30 minutes.</p>
          </div>
          <div style={styles.card}>
            <h3 style={styles.cardTitle}>Fresh Ingredients</h3>
            <p style={styles.cardText}>We use only the freshest ingredients from trusted local suppliers.</p>
          </div>
          <div style={styles.card}>
            <h3 style={styles.cardTitle}>Easy Ordering</h3>
            <p style={styles.cardText}>A seamless app and website make ordering your favorite meals simple.</p>
          </div>
        </div>
      </section>

      {/* Optional Image / Illustration */}
      <section style={styles.imageSection}>
        <img
          src="https://via.placeholder.com/800x400"
          alt="Delicious food"
          style={styles.image}
        />
      </section>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: 'sans-serif',
    color: '#333',
    lineHeight: 1.6,
  },
  hero: {
    textAlign: 'center',
    padding: '60px 20px',
    backgroundColor: '#fff8f0',
  },
  heroTitle: {
    fontSize: '36px',
    color: '#ff6600',
    marginBottom: '20px',
  },
  heroText: {
    fontSize: '18px',
    maxWidth: '600px',
    margin: '0 auto',
    color: '#555',
  },
  section: {
    padding: '50px 20px',
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: '28px',
    color: '#ff6600',
    marginBottom: '20px',
  },
  sectionText: {
    fontSize: '16px',
    maxWidth: '700px',
    margin: '0 auto',
    color: '#555',
  },
  cards: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '20px',
    marginTop: '30px',
  },
  card: {
    flex: '1 1 250px',
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    transition: 'transform 0.3s',
  },
  cardTitle: {
    fontSize: '20px',
    marginBottom: '10px',
    color: '#ff6600',
  },
  cardText: {
    fontSize: '14px',
    color: '#555',
  },
  imageSection: {
    textAlign: 'center',
    padding: '50px 20px',
  },
  image: {
    width: '100%',
    maxWidth: '800px',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
  },
};

export default About;
