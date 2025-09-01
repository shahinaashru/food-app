import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../features/cartSlice';
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
export default function ProductCard({ product }) {
  return (
    <div style={{
       padding: '20px', margin: '0.5rem', width: '290px',height:'300px',display: 'flex',flexDirection: 'column',alignItems: 'center',textAlign: 'center' 
    }}>
      {<img src={`./src/images/${product.image}.jpg`} alt={product.title} style={{ objectFit: 'contain',padding:'0px',width: '180px',height:'180px',borderRadius:'50%',backgroundColor:'#785055' }} />}
      <h4 style={{fontSize:'16px',fontWeight:'normal',align:'center'}}>{product.name}</h4>
      <Link to={`/menubyrestaurant/${product.id}`}>
      <button style={{backgroundColor:"#AB5400",padding:"5px",paddingLeft:"10px",paddingRight:"10px",color:"#fff",borderRadius:"15px"}}>View Menus</button>
      </Link>
    </div>
  );
}