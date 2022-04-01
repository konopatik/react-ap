import React from 'react';
import bread1 from "../images/1.jpeg";
import { Col, Card } from "react-bootstrap";
import {NavLink} from "react-router-dom";

const OneCard = () => {
    return (
        <NavLink to={"/test/"} >
            <Col>
                <Card>
                    <Card.Img variant="top"  src={bread1} />
                    <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This is a longer card with supporting text below as a natural
                            lead-in to additional content. This content is a little bit longer.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </NavLink>
    );
};

export default OneCard;