import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from '../components/ProductCard';
import { useParams } from 'react-router-dom';

export default function Products() {
  const { id } = useParams(); // get restaurantId from URL
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (id) {
      axios
        .get(`http://localhost:5000/menu?restaurantId=${id}`)
        .then(res => setProducts(res.data))
        .catch(err => console.error(err));
    }
  }, [id]);

  return (
    <div>
      <h2>Products</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {products.map(p => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}
