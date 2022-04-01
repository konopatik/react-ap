import React from 'react';
import {Container, Navbar} from "react-bootstrap";
import logo from "../images/logo.png";

const HeaderLogo = () => {
    return (
        <Navbar.Brand href="#home" style={{display: 'flex' , alignItems: 'center'}}>
            <img
                alt=""
                src={logo}
                width="50"
                height="50"
                className="d-inline-block align-top"
            />{' '}
            <strong>Mister Bread</strong>
        </Navbar.Brand>
    );
};

export default HeaderLogo;