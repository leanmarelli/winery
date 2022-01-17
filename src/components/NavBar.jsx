import React, { Fragment } from "react";
import { Navbar, Nav, Container } from 'react-bootstrap'; 
import { Person, Search } from 'react-bootstrap-icons';
import '../styles.css';
import CartWidget from './CartWidget'


const NavBar = () => {
    return (
        <Fragment>
            <Navbar collapseOnSelect expand="lg" bg="transparent" variant="dark">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Brand href="#home">
                        <img src="logo.jpg" alt="" className="logo"/>
                    </Navbar.Brand>
                    
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <Nav.Link className="me-5" href="#wine">Wine</Nav.Link>
                            <Nav.Link className="me-5" href="#club">Club CryptoWiner</Nav.Link>
                            <Nav.Link className="me-5" href="#about">About us</Nav.Link>
                            <Nav.Link className="me-5" href="#catalog">Contact</Nav.Link>
                            {/* <NavDropdown title="Club Crynery" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Gift</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Membership</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Delivery</NavDropdown.Item>
                            </NavDropdown> */}
                        </Nav>
                        <div className="nav-logo">
                            <div className="me-3">
                                <Search color="white" className="me-3" size={20} />
                                <CartWidget />
                                <Person color="white" size={24} />
                                
                            </div>
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Fragment>
    )
}

export default NavBar;