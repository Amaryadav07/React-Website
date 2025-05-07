import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaUser } from 'react-icons/fa';
import logo from "../images/manyavar logo.webp";

const TopNav = () => {
  return (
    <Navbar expand="lg" style={{ height: "100px", backgroundColor: "#F8ECD7" }}>
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

          <Form className="d-flex mx-auto" style={{ maxWidth: "400px", flexGrow: 1 }}>
            <InputGroup>
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-dark">Search</Button>
            </InputGroup>
          </Form>

          <Nav>
            <Nav.Link as={Link} to="/login" className="d-flex align-items-center mx-2">
              <FaUser size={20} style={{ marginRight: "5px" }} />
              Login
            </Nav.Link>
            <Nav.Link as={Link} to="/cart" className="d-flex align-items-center mx-2">
              <FaShoppingCart size={20} />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default TopNav;
