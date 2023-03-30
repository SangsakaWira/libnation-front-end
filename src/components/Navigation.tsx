import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Link from 'next/link';
import styles from './Link.module.css';

const linkStyle = {
  color:"black",
  margin:"15px",
  textDecoration:"none",
  hover:"blue"
}

function Navigation() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">CommerceApp</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link style={linkStyle} href="home">Home</Link>
            <Link style={linkStyle} href="product">Product</Link>
            <Link style={linkStyle} href="profile">Profile</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;