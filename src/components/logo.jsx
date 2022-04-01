import React from 'react';
import {Container, Navbar} from "react-bootstrap";
import logo from "../images/logo.png";

const Logo = () => {
    return (
        <Container style={{width: "40%"}}>
            <Navbar.Brand href="#home">
                <img
                    src={logo}
                    width="70"
                    height="70"
                    className="d-inline-block align-top"
                    alt="React Bootstrap logo"
                />
            </Navbar.Brand>
        </Container>
    );
};

export default Logo;