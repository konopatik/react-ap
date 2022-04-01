import React from 'react';
import { Navbar} from "react-bootstrap";
import Logo from "./logo";
import MenuFooter from "./menuFooter";
import FooterLeft from "./footerLeft";
const Footer = () => {
    return (
        <Navbar bg="dark">
            <Logo />
            <MenuFooter />
            <FooterLeft/>
        </Navbar>
    );
};

export default Footer;