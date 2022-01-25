import React from "react";
import { Navbar, Container } from 'react-bootstrap'; 

const Footer = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">
                    <img src="logo.png" alt="" className="logo" />
                </Navbar.Brand>
            </Container>
        </Navbar>
    )
}

export default Footer;