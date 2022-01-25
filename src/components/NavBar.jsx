import React, { Fragment } from "react";
import { Navbar, Nav, Container } from 'react-bootstrap'; 
import { Person, Search } from 'react-bootstrap-icons';
import '../styles.css';
import CartWidget from './CartWidget'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';


const NavBar = () => {
    return (
        <Fragment>
            <Navbar collapseOnSelect expand="lg" bg="transparent" variant="dark">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Link to="/">
                        <Navbar.Brand href="#home">
                            <img src="logo.png" alt="" className="logo"/>
                        </Navbar.Brand>
                    </Link>
                    
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            {/* <NavLink to={"/home"} activeClassName="active" className="nav-link">Wine</NavLink>
                            <NavLink to={"/categories"} activeClassName="active" className="nav-link">Categorias</NavLink> */}
                            <Nav.Link className="me-5" href="#wine">Wine</Nav.Link>
                            <Nav.Link className="me-5" href="#club">Club CryptoWiner</Nav.Link>
                            <Nav.Link className="me-5" href="#about">About us</Nav.Link>
                            <Nav.Link className="me-5" href="#catalog">Contact</Nav.Link>
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