import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCategories from '../components/ProductCategories';
import Restaurant from '../pages/Restaurant';
import Advertisement from '../pages/Advertisement';
import BannerSlider from "../components/BannerSlider";

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/categories') // or your endpoint
      .then(res => setProducts(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <BannerSlider/>
      <Restaurant/>
      <Advertisement/>
      <ProductCategories/>
    </div>
  );
}