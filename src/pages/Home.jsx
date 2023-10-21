import Button from '@mui/joy/Button';
import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home() {
    const centerText = {
        textAlign: 'center', 
        margin: '0 auto', 
        maxWidth: '800px',
        padding: '20px',    
    };

    const navigate= useNavigate();
    return (
        <div>
            {/* <Nav />  */}
            <h1 style={centerText}>Invoice Service</h1>
            <div style={centerText}>
                <p>
                    "Nuestro software de facturación de servicios web es la solución definitiva para simplificar la gestión de facturas en el entorno digital. Diseñado específicamente para negocios en línea, este software te permite crear, enviar y realizar un seguimiento de facturas de manera eficiente. Desde servicios de desarrollo web hasta consultoría en línea, nuestro software se adapta a tus necesidades. Olvídate de las complicaciones contables y mantén un control total sobre tus finanzas. Descubre la comodidad de gestionar tus facturas de servicios web con facilidad y precisión."
                </p>

                <Button onClick={()=>navigate("/login")}>Log In</Button>
            </div>
        </div>
    );
}
