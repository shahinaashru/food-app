import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import '../src/App.css';
/* slick-carousel default styles */
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
/* slick-carousel default styles */
export default function App() {
  return (
    <div>
      <Header />
      <main style={{ padding: '1rem' }}>
        <Outlet />
      </main>
       <Footer />
    </div>
  );
}