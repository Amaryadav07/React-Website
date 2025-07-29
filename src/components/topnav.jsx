import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaUser } from 'react-icons/fa';
import logo from "../images/manyavar logo.webp";
import LoginPage from '../auth/login';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import { useSelector } from "react-redux";


const TopNav = () => {


  const cartData = useSelector(state=>state.mycart.cart);
const cartLength= cartData.length;
const [query, setQuery] = useState("");
  const navigate = useNavigate();

   const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/search?q=${query.trim()}`);
    }
  };
  return (
    <>
    <Navbar expand="lg"  sticky="top"  style={{ height: "100px", backgroundColor: "#F8ECD7", zIndex: "1030" }}>
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img
            src={logo}
            alt="Manyavar & Mohey Logo"
            title="Manyavar & Mohey"
            style={{ height: "60px" }}
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" style={{ fontSize: "18px" , fontWeight: "bold" }}>
            <Nav.Link as={Link} to="/men">Men</Nav.Link>
            <Nav.Link as={Link} to="/women">Women</Nav.Link>
            <Nav.Link as={Link} to="/kids">Kids</Nav.Link>
            <Nav.Link as={Link} to="/blogs">Blogs</Nav.Link>
          </Nav>

           <Form className="d-flex mx-auto" style={{ maxWidth: "400px", flexGrow: 1 }} onSubmit={handleSearchSubmit}>
        <InputGroup>
          <Form.Control
            type="search"
           placeholder="Search By Men Women and Kids" 
            className="me-2"
            aria-label="Search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <Button variant="outline-dark" type="submit" >Search</Button>
        </InputGroup>
      </Form>

          <Nav>
            <Nav.Link as={Link} to="/login" className="d-flex align-items-center mx-2">
              <FaUser size={20} style={{ marginRight: "5px" }} />
              Login
            </Nav.Link>
            <Nav.Link as={Link} to="/cart" className="d-flex align-items-center mx-2 position-relative">
  <FaShoppingCart size={20} />
  {cartLength > 0 && (
    <span
      style={{
        position: "absolute",
        top: "6px",
        right: "0",
        background: "red",
        borderRadius: "50%",
        color: "white",
        padding: "2px 6px",
        fontSize: "12px",
        fontWeight: "bold",
        transform: "translate(50%, -50%)",
      }}
    >
      {cartLength}
    </span>
  )}
</Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

     

    </>
  );
};

export default TopNav;
