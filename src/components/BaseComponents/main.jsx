import React from 'react';
import {Container} from "react-bootstrap";
import Posts from "./PostsComponents/posts";


const Main = () => {
    return (
        <Container style={{width: "100%"}}>
            <Posts/>
        </Container>
    );
};

export default Main;