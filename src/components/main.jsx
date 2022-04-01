import React from 'react';
import {Container} from "react-bootstrap";
import Carousel from "./Carousel";
import CardTwo from "./cardTwo";

const Main = () => {
    return (
        <Container style={{width: "100%"}}>
            <Carousel />
            <CardTwo/>
        </Container>
    );
};

export default Main;