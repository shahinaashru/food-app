import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Container, Row, Col } from 'react-bootstrap';

const MyGrid = () => {
  return (
    <div  style={{ backgroundColor: '#AB5400', padding: '20px' ,margin: '0px',width:'100%' }}>
      <Row style={{margin:'0px'}}>
        <Col md={4} style={{  padding: '20px' }}>
           <img src="../src/images/logo.jpg" style={{width:'200px',height:'40px',marginBottom:'10px'}}/>
           <h4 style={{fontSize:"16px",fontWeight:"normal"}}>Foodi is a reliable online food delivery service in India, connecting you with a wide range of local restaurants. Enjoy fresh, delicious meals delivered fast and right to your doorstep.</h4>
        </Col>
        <Col md={4} style={{  padding: '20px' }}>
          <h4 style={{fontSize:"16px",fontWeight:"bold",marginBottom:"10px"}}>Quick Links</h4>
          
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <Link to="/" style={{ padding: '10px', color: '#ccc',textDecoration:'none',fontWeight:'bold' }}>Home</Link>
                <Link to="/products" style={{ padding: '10px', color: '#ccc',textDecoration:'none',fontWeight:'bold' }}>Menus</Link>
                <Link to="/about" style={{ padding: '10px', color: '#ccc',textDecoration:'none',fontWeight:'bold' }}>About</Link>
                <Link to="/contact" style={{ padding: '10px', color: '#ccc',textDecoration:'none',fontWeight:'bold' }}>Contact</Link>
            </div>
        </Col>
        <Col md={4} style={{ padding: '20px' }}>
          <div>
        <h4 style={{fontSize:"16px",fontWeight:"bold",marginBottom:"10px"}}>Contact Details</h4>
        <p>📞 Phone: <a href="tel:+911234567890" style={{ color: '#ccc' }}>+91 12345 67890</a></p>
        <p>✉️ Email: <a href="mailto:support@foodi.in" style={{ color: '#ccc' }}>support@bitebuddy.in</a></p>
      </div>
        </Col>
      </Row>
    </div>
  );
};

export default MyGrid;
