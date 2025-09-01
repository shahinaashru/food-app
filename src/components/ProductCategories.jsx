import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCategoryCard from '../components/ProductCategoryCard';

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/categories') 
      .then(res => setProducts(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h2 style={{paddingTop:'40px',alignContent:'center',textAlign:'center',color:'#382628'}}>Find Dishes by Categories</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {products.map(p => <ProductCategoryCard key={p.id} product={p} />)}
      </div>
    </div>
  );
}