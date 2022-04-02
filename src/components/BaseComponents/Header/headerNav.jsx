import React from 'react';
import {Navbar, Nav, Form, FormControl, Button} from "react-bootstrap";
import ButtonCounter from "../Counter/buttonCounter";
const HeaderNav = () => {
    return (
        <Navbar.Collapse id="navbarScroll">
            <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
            >
                <Nav.Link href="#action1">Home</Nav.Link>
                <Nav.Link href="#action2">Link</Nav.Link>
                <Nav.Link href="#action2">Link</Nav.Link>
                <ButtonCounter />
            </Nav>
            <Form className="d-flex">
                <FormControl
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                />
                <Button variant="secondary">Search</Button>
            </Form>
        </Navbar.Collapse>

    );
};

export default HeaderNav;