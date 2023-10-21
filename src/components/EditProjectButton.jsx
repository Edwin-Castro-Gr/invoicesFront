import React from 'react';
import Button from '@mui/joy/Button';
import axios from 'axios';

function UpdateRowButton({ id, onUpdate }) {
  const handleUpdate = async () => {
    try {
      // Aquí, necesitas proporcionar los datos actualizados que deseas enviar al servidor.
      const updatedData = {
        // Aquí colocas los campos y sus nuevos valores
        // Por ejemplo:
        // nombre: 'NuevoNombre',
        // email: 'nuevo@email.com',
      };

      // Realiza la solicitud PUT a la API con Axios para actualizar el recurso.
      await axios.put(`http://localhost:3000/api/v0/proyectos/${id}`, updatedData);

      // Llama a la función onUpdate para refrescar la interfaz u otra acción que necesites.
      onUpdate(id, updatedData);
    } catch (error) {
      console.error('Error al actualizar el cliente:', error);
    }
  };

  return (
    <Button
      size="s"
      variant="outlined"
      color="primary"
      onClick={handleUpdate}
    >
    </Button>
  );
}

export default UpdateRowButton;
