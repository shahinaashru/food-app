import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Navbar, Nav, NavDropdown, Container, Badge, Form, FormControl, Button ,InputGroup} from 'react-bootstrap';
import { FaShoppingCart, FaUserCircle, FaSearch } from 'react-icons/fa';
import { LinkContainer } from 'react-router-bootstrap';
import { useNavigate } from 'react-router-dom';
import '../css/header.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 

export default function AppNavbar() {
  const [user, setUser] = useState(null);
  // const [cartItems, setCartItems] = useState([]);
  const cartItems = useSelector((state) => state.cart.items);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
      setUser(storedUser);
    }
    // Assuming cart items are stored in localStorage as well
    //  const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    //  console.log(storedCart);
    // setCartItems(storedCart);
  }, []);
   
  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/products?search=${encodeURIComponent(searchTerm.trim())}`);
      setSearchTerm('');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(null);
    navigate('/login');
  };

  return (
    <Navbar bg="light" expand="lg" sticky="top">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>
            <img
              src="../src/images/logo.jpg" // Replace with the path to your selected icon
              alt="Restaurant Icon"
              style={{ width: '200px', height: '60px', marginRight: '10px' }}
            />
            </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="app-navbar-nav" />
        <Navbar.Collapse id="app-navbar-nav">
          <Nav className="me-auto">
             <LinkContainer to="/">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/products">
              <Nav.Link>Menu</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/about">
              <Nav.Link>About</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/contact">
              <Nav.Link>Contact</Nav.Link>
            </LinkContainer>
          </Nav>
          <Nav className="ms-auto d-flex align-items-center">
            <Form className="d-flex align-items-center" onSubmit={handleSearch}>
  <InputGroup>
    <FormControl
      type="search"
      placeholder="Search"
      aria-label="Search"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      style={{ paddingRight: '40px' }} // space for the icon
    />
    <Button
      variant="link"
      type="submit"
      style={{
        position: 'absolute',
        right: '10px',
        top: '50%',
        transform: 'translateY(-50%)',
        border: 'none',
        padding: 0,
      }}
    >
      <img
        src="../src/images/search.png"
        alt="Search"
        style={{ width: '20px', height: '20px' }}
      />
    </Button>
  </InputGroup>
</Form>
            <LinkContainer color="#ff6600" style={{ color: '#ff6600', fontSize: '22px'}} to="/cart">
              <Nav.Link>
                <FaShoppingCart/>
                {cartItems.length > 0 && (
                  <Badge pill bg='danger' style={{position: 'relative',top: '-20px',right: '0px',
                    fontSize: '12px',backgroundColor:'#ff6600 !important',color: '#fff' }} className="ms-1">
                    {cartItems.length}
                  </Badge>
                )}
              </Nav.Link>
            </LinkContainer>
            {user ? (
              <NavDropdown
                title={<FaUserCircle color='#ff6600' size={20}/>}
                // title={<img src={`../src/images/user.png`} style={{width:"25px",height:"25px"}}/>}
                id="user-dropdown"
                align="end"
              >
                <LinkContainer to="/profile" color='#ff6600'>
                  <NavDropdown.Item>Profile</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/cart" >
                  <NavDropdown.Item>My Orders</NavDropdown.Item>
                </LinkContainer>
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={handleLogout}>Logout</NavDropdown.Item>
              </NavDropdown>
            ) : (
              <LinkContainer to="/signup">
                <Nav.Link>
                  {/* <FaUserCircle /> */}
                  <img src={`../src/images/user.png`} style={{width:"20px",height:"20px"}}/>
                </Nav.Link>
              </LinkContainer>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
