import React from 'react';
import {Nav} from "react-bootstrap";

const FooterMenu = () => {
    return (
        <Nav className="justify-content-center" activeKey="/home">
            <Nav.Item>
                <Nav.Link  style={{color: "white"}} href="/home">Active</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link  style={{color: "white"}} eventKey="link-1">Link</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link  style={{color: "white"}} eventKey="link-2">Link</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link  style={{color: "white"}} eventKey="disabled" disabled>
                    Disabled
                </Nav.Link>
            </Nav.Item>
        </Nav>
    );
};

export default FooterMenu;