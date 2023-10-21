import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {
    Button,
    FormControl,
    FormLabel,
    Input,
    Link,
    Sheet,
    Typography
} from '@mui/joy';
import { useTokenLogInContext } from '../utils/tokenContext';

export default function Login() {
    const logIn = useTokenLogInContext();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            // Realiza la llamada a la API para iniciar sesión
            const response = await axios.post('http://localhost:3000/api/v0/auth', { email, password });

            // Verifica si la respuesta es exitosa
            if (response.status === 206) {
                // Guarda el token en el contexto
                logIn(response.data);

                // Redirige al usuario a una de las rutas en AppRouter después de un inicio de sesión exitoso
                // En este ejemplo, redirigimos al usuario a la ruta 'FormClient'.
                navigate('/FormClient');
            } else {
                // Si la respuesta no es exitosa, muestra un mensaje de error
                console.error('Error al iniciar sesión');
            }
        } catch (error) {
            console.error('Error al iniciar sesión', error);
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
                            <b>Invoices Services</b>
                        </Typography>
                        <Typography level="body-sm">Sign in to continue.</Typography>
                    </div>
                    <FormControl>
                        <FormLabel>Email</FormLabel>
                        <Input
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            name="email"
                            type="email"
                            placeholder="ejemplo@email.com"
                        />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Password</FormLabel>
                        <Input
                            name="password"
                            type="password"
                            placeholder="password"
                            autoComplete="off"
                            value={password}
                            onChange={(e) => {
                                setPassword(e.target.value);
                            }}
                        />
                    </FormControl>

                    <Button sx={{ mt: 1 }} onClick={handleLogin}>
                        Log in
                    </Button>
                    <Typography
                        endDecorator={<Link href="/sign-up">Sign up</Link>}
                        fontSize="sm"
                        sx={{ alignSelf: 'center' }}
                    >
                        Don't have an account?
                    </Typography>
                </Sheet>
            </main>
        </div>
    );
}
