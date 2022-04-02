import React from 'react';
import { Button, Modal, Form } from "react-bootstrap";
import { observer } from "mobx-react-lite";
import {modalStore} from "../store/modalStore";
function Registration() {

    return (
        <>
            <Button className="myBtn" variant="danger" onClick={modalStore.handleShow}>
                Регистрация
            </Button>

            <Modal show={modalStore.show} onHide={modalStore.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Введите ваши данные</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                        <Button variant="danger" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="outline-danger" onClick={modalStore.handleClose}>
                        Close
                    </Button>
                    <Button variant="danger" onClick={modalStore.handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default observer(Registration);
