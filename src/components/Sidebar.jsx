import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Link } from 'react-router-dom';


export default function Sidebar() {
    return (
        <nav id="sidebar" className="sidebar">
            <div className="list-group">
                <Link to="/dashboard" className="list-group-item list-group-item-action">Dashboard</Link>
                <Link to="/reportes" className="list-group-item list-group-item-action">Reportes</Link>
                <Link to="/configuracion" className="list-group-item list-group-item-action">Configuración</Link>
            </div>
        </nav>
    );
}
