import React from 'react';
import { Navbar} from "react-bootstrap";
import Logo from "../logo";
import FooterMenu from "./footerMenu";
import FooterNav from "./footerNav";
const Footer = () => {
    return (
        <Navbar bg="dark">
            <Logo />
            <FooterMenu />
            <FooterNav/>
        </Navbar>
    );
};

export default Footer;