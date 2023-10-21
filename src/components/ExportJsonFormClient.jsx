import React, { useState } from 'react';

export function FormDataToJson() {
    const [formData, setFormData] = useState({
        name: '',
        nit: '',
        direction: '',
        phoneNumber: '',
        email: '',
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();

        // Convierte los datos del formulario en un JSON
        const jsonData = JSON.stringify(formData);

        // Realiza una solicitud POST para enviar el JSON al servidor
        fetch('http://localhost:3000/api/v0/Client', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: jsonData,
        })
            .then((response) => response.json())
            .then((data) => {
                // Aquí puedes manejar la respuesta del servidor si es necesario
                console.log('Respuesta del servidor: OKOK', data);
            })
            .catch((error) => {
                // Manejar errores, si los hay
                console.error('Error al enviar los datos:', error);
            });
    };

    return (
        <form onSubmit={handleFormSubmit}>
            <div>
                <label>Name Client:</label>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                />
            </div>
            <div>
                <label>Nit:</label>
                <input
                    type="text"
                    name="nit"
                    value={formData.nit}
                    onChange={handleInputChange}
                />
            </div>
            <div>
                <label>Direction:</label>
                <input
                    type="text"
                    name="direction"
                    value={formData.direction}
                    onChange={handleInputChange}
                />
            </div>
            <div>
                <label>Number Phone:</label>
                <input
                    type="text"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                />
            </div>
            <div>
                <label>Email:</label>
                <input
                    type="text"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
}
