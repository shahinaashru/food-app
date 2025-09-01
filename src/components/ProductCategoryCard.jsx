import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../features/cartSlice';
import { Link } from "react-router-dom";
export default function ProductCard({ product }) {
  console.log(product);
  const dispatch = useDispatch();

  return (
    <div style={{
      border: '1px solid #ccc', padding: '20px', margin: '0.5rem', width: '290px',backgroundColor:'#ffcd99',borderRadius:'12px',display: 'flex',flexDirection: 'column',alignItems: 'center',textAlign: 'center' 
    }}>
      {<img src={`./src/images/${product.image}.jpg`} alt={product.title} style={{ width: '250px', height: '200px', objectFit: 'contain',padding:'0px' }} />}
      <h4 style={{fontSize:'16px',fontWeight:'normal',align:'center'}}>{product.name}</h4>
      <Link to={`/menubycategory/${product.id}`}>
      <button style={{backgroundColor:"#000000",padding:"5px",paddingLeft:"10px",paddingRight:"10px",color:"#fff",borderRadius:"15px"}}>Check Cuisines</button>
      </Link>
    </div>
  );
}