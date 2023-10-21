import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTokenLogInContext } from "../utils/tokenContext";

export const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Obtén el contexto del token
  const logIn = useTokenLogInContext();
  //const { token, setToken } = useContext(TokenContext);
  const navigate = useNavigate();
  const handleRegister = async () => {
    try {
      // Realiza la llamada a la API para registrar un nuevo usuario
      const response = await axios.post('http://localhost:3000/api/v0/empleados', { user: username, password, email })
      console.log(response);

      // Verifica si la respuesta es exitosa
      if (response.status === 201) {
        console.log(response.data.token);
        // Guarda el token en el contexto
        logIn(response.data.token);
        navigate("/login");
      } else {
        // Si la respuesta no es exitosa, muestra un mensaje de error
        console.error('Error al registrar usuario');
      }
    } catch (error) {
      console.error('Error al registrar usuario', error);
    }
  };

  return (
    <>
      <h2>Registro</h2>
      <input
        type="text"
        placeholder="Nombre de usuario"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="email"
        placeholder="Correo electrónico"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Contraseña"
        autoComplete="off"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleRegister}>Registrarse</button>
    </>
  );
};