import React from 'react';
import {Navbar} from "react-bootstrap";

const FooterLeft = () => {
    return (
        <Navbar.Collapse className="justify-content-end">
            <Navbar.Text style={{color: "white"}}>
                Signed in as: <a href="#login"  style={{color: "white"}}>Mark Otto</a>
            </Navbar.Text>
        </Navbar.Collapse>
    );
};

export default FooterLeft;