import React from 'react';
import { Row } from "react-bootstrap";
import IPost from "./iPost";

const Posts = () => {
    return (
        <Row xs={1} md={2} className="g-4 margin">
            {Array.from({ length: 12 }).map((_, idx) => (
                <IPost/>
            ))}
        </Row>
    );
};

export default Posts;

