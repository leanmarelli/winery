import React, { Fragment, useState } from "react";
import { Navbar, Nav, Container, FormControl, Form, InputGroup } from 'react-bootstrap'; 
import { Person, Search } from 'react-bootstrap-icons';
import '../styles.css';
import CartWidget from './CartWidget'
import { BrowserRouter, Routes, NavLink, Link } from 'react-router-dom';


const NavBar = () => {
    const[onSearch, setOnSearch] = useState(false)
    const onSearchChange = (event) => {
        console.log(event.target.value)
        let query = event.target.value;
        if (query.length > 5) {
            setOnSearch(true)
        } else {
            setOnSearch(false)
        }
    }

    const [lookSearch, setlookSearch] = useState(false)


    return (
        <Fragment>
            <Navbar className="navbar-container" collapseOnSelect expand="lg" variant="dark">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Link to="/">
                        <Navbar.Brand href="#home">
                            <img src="logo.png" alt="" className="logo"/>
                        </Navbar.Brand>
                    </Link>
                    
                    <Navbar.Collapse id="responsive-navbar-nav ">
                        <Nav className="mx-auto">
                            <NavLink to={"/"} className="me-5">Wine</NavLink>
                            <NavLink to={"/categories"}className="me-5" >Categorias</NavLink>
                            <NavLink to={"/product"} className="me-5">About us</NavLink>
                            <NavLink to={"/product"} className="me-5">Contacto</NavLink>
                        </Nav>
                        <div className="nav-logo ">
                            <div className="me-3 d-flex align-items-center">
                                <Form>
                                    <InputGroup size="sm" className="mr-3">
                                        <FormControl className="buscador" onChange={onSearchChange} aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
                                    </InputGroup>
                                    {onSearch ?
                                    
                                    <div style={{position: "absolute", right:0, top:0, width:200, height: 300, color:"grey"}}>
                                        <li onClick={() => setOnSearch(false)}>resultado</li>
                                        <li onClick={() => setOnSearch(false)}>resultado 2</li>
                                        <li onClick={() => setOnSearch(false)}>resultado 3</li>
                                        <li onClick={() => setOnSearch(false)}>resultado 4</li>
                                        <li onClick={() => setOnSearch(false)}>resultado 5</li>
                                        <li onClick={() => setOnSearch(false)}>resultado 6</li>
                                    </div>
                                    : null} 
                                </Form>
                                <Search onClick={() => setlookSearch(true)} className="m-3 texto-primario" size={20} />
                                <CartWidget />
                                <Person className="texto-primario" size={24} />
                            </div>
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Fragment>
    )
}

export default NavBar;