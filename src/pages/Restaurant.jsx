import React, { useEffect, useState } from 'react';
import axios from 'axios';
import RestaurantCard from '../components/RestaurantCard';

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/restaurants') 
      .then(res => setProducts(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h2 style={{paddingTop:'40px',alignContent:'center',textAlign:'center',color:'#382628'}}>Available Restaurant</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {products.map(p => <RestaurantCard key={p.id} product={p} />)}
      </div>
    </div>
  );
}