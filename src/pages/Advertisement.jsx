// src/components/Advertising.jsx
import React, { useState } from "react";

export default function Advertising() {
  const [hovered, setHovered] = useState(null);

  const images = [
    {
      src: "./src/images/eating.jpg",
      title: "Fresh & Tasty Meals",
    },
    {
      src: "./src/images/meal.jpg",
      title: "Fast Delivery to Your Door",
    },
  ];

  return (
    <div style={styles.container}>
      <h1 style={styles.mainHeading}>Discover Delicious Moments with BiteBuddy</h1>
      <div style={styles.imagesWrapper}>
        {images.map((item, index) => (
          <div
            key={index}
            style={styles.imageCard}
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
          >
            <img src={item.src} alt={item.title} style={styles.image} />
            <div
              style={{
                ...styles.overlay,
                opacity: hovered === index ? 1 : 0,
              }}
            >
              <h2 style={styles.overlayTitle}>{item.title}</h2>
              <button style={styles.button}>Order Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: "50px 20px",
    textAlign: "center",
    backgroundColor: "#fff8f0",
  },
  mainHeading: {
    fontSize: "36px",
    color: "#ff6600",
    marginBottom: "40px",
    fontWeight: "700",
  },
  imagesWrapper: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "20px",
  },
  imageCard: {
    position: "relative",
    flex: "1 1 300px",
    maxWidth: "500px",
    borderRadius: "12px",
    overflow: "hidden",
    boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
    cursor: "pointer",
  },
  image: {
    width: "100%",
    height: "auto",
    display: "block",
    objectFit: "cover",
    transition: "transform 0.3s",
  },
  overlay: {
    position: "absolute",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    background: "rgba(0,0,0,0.4)",
    color: "#fff",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    transition: "opacity 0.3s",
  },
  overlayTitle: {
    fontSize: "24px",
    fontWeight: "600",
    marginBottom: "15px",
    textAlign: "center",
    padding: "0 10px",
  },
  button: {
    padding: "10px 25px",
    fontSize: "16px",
    fontWeight: "500",
    backgroundColor: "#ff6600",
    border: "none",
    borderRadius: "8px",
    color: "#fff",
    cursor: "pointer",
    transition: "background 0.3s",
  },
};
