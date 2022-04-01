import React from 'react';
import { Row } from "react-bootstrap";
import {Route, Routes} from "react-router-dom";
import OneCard from "./card";
import {withRouter} from "react-router";
import Main from "./main";

const CardTwo = () => {
    return (
        <Row xs={1} md={2} className="g-4 margin">
            {Array.from({ length: 12 }).map((_, idx) => (
                <OneCard/>
            ))}
        </Row>
    );
};

export default CardTwo;

