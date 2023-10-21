import Sheet from '@mui/joy/Sheet';
import Typography from '@mui/joy/Typography';
import * as React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';

export default function FormClient() {
    const [validated, setValidated] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');
    const [formData, setFormData] = useState({
        name: '',
        nit: '',
        direction: '',
        phone: '',
        email: '',
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.stopPropagation();
        } else {
            // Si el formulario es válido, muestra la alerta y configura el mensaje
            setAlertMessage('Added Client');
            setShowAlert(true);

            // Reinicia el formulario después de 2 segundos
            setTimeout(() => {
                setFormData({
                    name: '',
                    nit: '',
                    direction: '',
                    phone: '',
                    email: '',
                });
                setShowAlert(false);
                setValidated(false);
            }, 2000);
        }

        setValidated(true);
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
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
                            <Typography level="h1">New Client</Typography>
                        </div>
                        <Form noValidate validated={validated} onSubmit={handleSubmit}>
                            <Row className="mb-3">
                                <Form.Group as={Col} md="6" controlId="validationCustom01">
                                    <Form.Label>Name Client</Form.Label>
                                    <Form.Control
                                        name="name"
                                        required
                                        type="text"
                                        placeholder="Name Client"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                    />
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} md="6" controlId="validationCustom02">
                                    <Form.Label>Nit</Form.Label>
                                    <Form.Control
                                        name="nit"
                                        required
                                        type="text"
                                        placeholder="Nit"
                                        value={formData.nit}
                                        onChange={handleInputChange}
                                    />
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>
                            </Row>

                            <Row className="mb-3">
                                <Form.Group as={Col} md="6" controlId="validationCustomUsername">
                                    <Form.Label>Direction</Form.Label>
                                    <InputGroup hasValidation>
                                        <Form.Control
                                            name="direction"
                                            type="text"
                                            placeholder='Direction'
                                            required
                                            value={formData.direction}
                                            onChange={handleInputChange}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            Please choose a Direction.
                                        </Form.Control.Feedback>
                                    </InputGroup>
                                </Form.Group>

                                <Form.Group as={Col} md="6" controlId="validationCustomPhone">
                                    <Form.Label>Number phone</Form.Label>
                                    <InputGroup hasValidation>
                                        <Form.Control
                                            name="phone"
                                            type="text"
                                            placeholder='Number Phone'
                                            required
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            Please choose a Number phone.
                                        </Form.Control.Feedback>
                                    </InputGroup>
                                </Form.Group>
                            </Row>

                            <Form.Group as={Col} md="6" controlId="validationCustomEmail">
                                <Form.Label>Email</Form.Label>
                                <InputGroup hasValidation>
                                    <Form.Control
                                        name="email"
                                        type="text"
                                        placeholder='Email'
                                        required
                                        value={formData.email}
                                        onChange={handleInputChange}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        Please choose an Email.
                                    </Form.Control.Feedback>
                                </InputGroup>
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
