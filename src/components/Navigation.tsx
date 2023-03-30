import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Link from 'next/link';
import Image from 'next/image';
import styles from './styles.module.css'

function Navigation() {
  return (
    <Navbar className={styles.navigation} expand="lg">
      <Container>
        <Navbar.Brand href="/">
          <img src="/images/logo-white.svg" alt='logo'
            
            style={{ width: '15%'}}></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link className={styles.link} href="home">Home</Link>
            <Link className={styles.link} href="my-books">Books</Link>
            <Link className={styles.link} href="add-book">Add</Link>
            <Link className={styles.link} href="logout">Logout</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;