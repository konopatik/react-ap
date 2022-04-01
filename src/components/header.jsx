import React from 'react';
import { Outlet, Link } from "react-router-dom";
import {Container, Navbar} from "react-bootstrap";
import HeaderLogo from "./headerlogo";
import HeaderNav from "./headerNav";
const Header = () => {
    return (
        <>
            <header>
                <Navbar bg="light" expand="lg">
                    <Container>
                        <HeaderLogo/>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <HeaderNav/>
                    </Container>
                </Navbar>
            </header>

            <Outlet />
       </>
    );
};

export default Header;