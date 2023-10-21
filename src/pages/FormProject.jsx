import Sheet from '@mui/joy/Sheet';
import Typography from '@mui/joy/Typography';
import * as React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
// import { Navigate } from "react-router-dom";
import "../css/style.css";

export default function FormClient() {
    const [validated, setValidated] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.stopPropagation();
        } else {
            // Si el formulario es válido, muestra la alerta y configura el mensaje
            setAlertMessage('Added Project');
            setShowAlert(true);

            // Reinicia el formulario después de 2 segundos
            setTimeout(() => {
                setShowAlert(false);
                setValidated(false);
            }, 2000);
        }

        setValidated(true);
    };

    return (
        <>
            <div className="App-header">
                <main style={{ marginTop: "-180px", display: "flex", alignItems: "center", justifyContent: "center", height: "100vh" }}>
                    <Sheet
                        sx={{
                            textAlign: 'center',
                            width: 1000,
                            my: 20,
                            py: 3,
                            px: 2,
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 3,
                            borderRadius: 'sm',
                            boxShadow: 'md',
                        }}
                        variant="outlined"
                    >
                        <div>
                            <Typography level="h1">New Project</Typography>
                        </div>
                        <Form noValidate validated={validated} onSubmit={handleSubmit}>
                            <Row className="mb-3">
                                <Form.Group as={Col} md="6" controlId="validationCustom01">
                                    <Form.Label>Name Project</Form.Label>
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder="Name Project"
                                    />
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} md="6" controlId="validationCustom02">
                                    <Form.Label>Client</Form.Label>
                                    <Form.Control
                                        required
                                        disabled={true}
                                        type="text"
                                        placeholder="Client"
                                    />
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>
                            </Row>
                            <Form.Group as={Col} md="6" controlId="validationCustom02">
                                <Form.Label>Nit</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="Client"
                                />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>

                            <Row className="mb-3">
                                <Form.Group as={Col} md="6" controlId="validationCustomUsername">
                                    <Form.Label>Date Start</Form.Label>
                                    <InputGroup hasValidation>
                                        <Form.Control
                                            type="date"
                                            required
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            Please choose a date.
                                        </Form.Control.Feedback>
                                    </InputGroup>
                                </Form.Group>

                                <Form.Group as={Col} md="6" controlId="validationCustomUsername">
                                    <Form.Label>Date End</Form.Label>
                                    <InputGroup hasValidation>
                                        <Form.Control
                                            type="date"
                                            required
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            Please choose a date.
                                        </Form.Control.Feedback>
                                    </InputGroup>
                                </Form.Group>
                            </Row>

                            <Form.Group as={Col} md="12" controlId="validationCustom03">
                                <Form.Label>Description Project</Form.Label>
                                <Form.Control as="textarea" rows={3} placeholder="Description Project" required />
                                <Form.Control.Feedback type="invalid">
                                    Please provide a valid description.
                                </Form.Control.Feedback>
                            </Form.Group>

                            <Button type="submit" style={{ marginTop: "20px" }}>
                                Submit form
                            </Button>
                        </Form>

                        {/* La alerta */}
                        {showAlert && (
                            <div className="alert alert-success" role="alert">
                                {alertMessage}
                            </div>
                        )}
                    </Sheet>
                </main>
            </div>
        </>
    );
}
