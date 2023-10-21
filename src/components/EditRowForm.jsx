import React, { useState } from 'react';
import { Button, Col, Form, InputGroup, Row } from 'react-bootstrap';
import '../css/style.css'



function EditRowForm({ initialData, onSave, onCancel }) {
    const [editedData, setEditedData] = useState(initialData);
    const [validated, setValidated] = useState(false);

    const handleFieldChange = (fieldName, value) => {
        setEditedData({
            ...editedData,
            [fieldName]: value
        });
    };

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        event.preventDefault();

        if (form.checkValidity() === false) {
            event.stopPropagation();
        }

        setValidated(true);

        onSave(editedData);
    };

    const handleSave = () => {
        onSave(editedData);
    };

    const handleCancel = () => {
        onCancel();
    };

    return (
        <div className="floating-form-container">

            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Row className="mb-3">
                    <Form.Group as={Col} md="6" controlId="validationCustom01">
                        <Form.Label>Name Project</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="Name Project"
                            onChange={(e) => handleFieldChange('nameProject', e.target.value)}
                            value={editedData.nameProject}
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
                            value={editedData.client}
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
                        onChange={(e) => handleFieldChange('nit', e.target.value)}
                        value={editedData.nit}
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
                                onChange={(e) => handleFieldChange('dateStart', e.target.value)}
                                value={editedData.dateStart}
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
                                onChange={(e) => handleFieldChange('dateEnd', e.target.value)}
                                value={editedData.dateEnd}
                            />
                            <Form.Control.Feedback type="invalid">
                                Please choose a date.
                            </Form.Control.Feedback>
                        </InputGroup>
                    </Form.Group>
                </Row>

                <Form.Group as={Col} md="12" controlId="validationCustom03">
                    <Form.Label>Description Project</Form.Label>
                    <Form.Control as="textarea" rows={3} placeholder="Description Project" required
                        onChange={(e) => handleFieldChange('description', e.target.value)}
                        value={editedData.description}
                    />
                    <Form.Control.Feedback type="invalid">
                        Please provide a valid description.
                    </Form.Control.Feedback>
                </Form.Group>

                <Button type="submit" style={{ marginTop: "20px" }} onClick={handleSave}>
                    Save
                </Button>
                <Button variant="danger" style={{ marginTop: "20px" }} onClick={handleCancel}>
                    Cancel
                </Button>
            </Form>




        </div>
    );
}

export default EditRowForm;
