import React from 'react';
import bread1 from "../../../images/1.jpeg";
import {Card} from "react-bootstrap";
import {Link, Outlet} from "react-router-dom";
const IPost = () => {
    return (
        <>
            <Link to='/read'>
                <Card>
                    <Card.Img variant="top" src={bread1}  style={{width: "100%", height: "50%"}}/>
                    <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
            </Link>
            <Outlet />
        </>
    );
};

export default IPost;