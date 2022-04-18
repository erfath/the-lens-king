import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import logo from '../../../images/Logo/logo1.png'

const Header = () => {
    const [user] = useAuthState(auth);

    const handleSignout = () => {
        signOut(auth);
    }

    return (
        <Navbar sticky='top' collapseOnSelect expand="lg" bg="primary" variant="dark">
            <Container>
                <Navbar.Brand as={Link} to="/"><img height={80} src={logo} alt="" /><span className='fs-1'>The Lens King</span></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">

                    </Nav>
                    <Nav>
                        <Nav.Link href="/" className='text-white fs-4 me-3'>Home</Nav.Link>
                        <Nav.Link href="home#services" className='text-white me-3 fs-4'>My Services</Nav.Link>
                        <Nav.Link href="home#blogs" className='text-white me-3 fs-4'>Blogs</Nav.Link>
                        <Nav.Link as={Link} to="about" className='text-white me-3 fs-4'>About Me</Nav.Link>
                        {
                            user ?
                                <button className='btn btn-primary fs-4' onClick={handleSignout}>Sign out</button>
                                :
                                <Nav.Link as={Link} to="login" className='text-white fs-4'>
                                    Login
                                </Nav.Link>}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;