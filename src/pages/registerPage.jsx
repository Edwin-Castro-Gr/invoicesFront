  import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Sheet,
  Typography
} from '@mui/joy';
import axios from "axios";
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useTokenLogInContext } from "../utils/tokenContext";

export const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');

  // Obtén el contexto del token
  const logIn = useTokenLogInContext();
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      // Realiza la llamada a la API para registrar un nuevo usuario
      const response = await axios.post('https://backend-invoice.onrender.com/api/v0/empleados', { user: username, password, email })
      console.log(response);

      // Verifica si la respuesta es exitosa
      if (response.status === 201) {
        // Muestra el alert después de 2 segundos
        setAlertMessage('Usuario agregado con éxito');
        setShowAlert(true);
        setTimeout(() => {
          // Redirige a la otra página después de 2 segundos
          navigate("/login");
        }, 2000);
      } else {
        // Si la respuesta no es exitosa, muestra un mensaje de error
        console.error('Error al registrar usuario');
      }
    } catch (error) {
      console.error('Error al registrar usuario', error);
    }
  };

  return (
    <div className="App-header">
      <main>
        <Sheet
          sx={{
            textAlign: 'center',
            width: 300,
            mx: 'auto',
            my: 20,
            py: 3,
            px: 2,
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            borderRadius: 'sm',
            boxShadow: 'md',
          }}
          variant="outlined"
        >
          <div>
            <Typography level="h4" component="h1">
              <b>Registro de Usuario</b>
            </Typography>
            <Typography level="body-sm">Regístrate para continuar.</Typography>
          </div>
          <FormControl>
            <FormLabel>Nombre</FormLabel>
            <Input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              type="text"
              autoComplete="on"
              placeholder="Nombre de Usuario"
            />
          </FormControl>
          <FormControl>
            <FormLabel>Correo Electrónico</FormLabel>
            <Input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              autoComplete="off"
              placeholder="Correo electrónico"
            />
          </FormControl>
          <FormControl>
            <FormLabel>Contraseña</FormLabel>
            <Input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              autoComplete="off"
              placeholder="Contraseña"
            />
          </FormControl>

          <Button sx={{ mt: 1 }} onClick={handleRegister}>
            Registrarse
          </Button>

          {/* La alerta */}
          {showAlert && (
            <div className="alert alert-success" role="alert">
              {alertMessage}
            </div>
          )}
        </Sheet>
      </main>
    </div>
  );
};

