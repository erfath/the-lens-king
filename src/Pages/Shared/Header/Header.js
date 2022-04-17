import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import logo from '../../../images/Logo/logo1.png'

const Header = () => {
    return (
        <Navbar sticky='top' style={{height:'80px'}} collapseOnSelect expand="lg" bg="primary" variant="dark">
  <Container>
  <Navbar.Brand href="#home"><img className='w-25' src={logo} alt="" /><span className='fs-1'>The Lens King</span></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      
      
      
    </Nav>
    <Nav>
    <Nav.Link href="#home" className='text-white fs-4 me-3'>Home</Nav.Link>
    <Nav.Link href="#services" className='text-white me-3 fs-4'>My Services</Nav.Link>
    <Nav.Link href="#blogs" className='text-white me-3 fs-4'>Blogs</Nav.Link>
      <Nav.Link href="#contact" className='text-white me-3 fs-4'>Contact</Nav.Link>
      <Nav.Link eventKey={2} href="#memes" className='text-white fs-4'>
        Login
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
    );
};

export default Header;