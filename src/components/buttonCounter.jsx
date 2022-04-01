import React from 'react';
import { observer } from "mobx-react-lite";
import {counterStore} from "../store/counterStore";
import {Button, Badge} from "react-bootstrap";


const ButtonCounter = () => {
    return (
        <Button variant="info" onClick={counterStore.inc}>
            New  <Badge bg="secondary">{counterStore.counter}</Badge>
            <span className="visually-hidden">unread messages</span>
        </Button>
    );
};


export default observer(ButtonCounter);