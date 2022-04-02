import React from 'react';
import { Outlet } from "react-router-dom";
import {Container, Navbar} from "react-bootstrap";
import HeaderLogo from "./headerlg";
import HeaderNav from "./headerNav";
import Registration from "../../registration";
const Header = () => {
    return (
        <>
            <header>
                <Navbar bg="light" expand="lg">
                    <Container>
                        <HeaderLogo/>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <HeaderNav/>
                        <Registration/>
                    </Container>
                </Navbar>
            </header>

            <Outlet />
       </>
    );
};

export default Header;