import React from 'react'
import '../css/Inicio.css'
import logo from '../img/logo.png'
import { Link } from 'react-router-dom'

function NavigationStart() {
 return (
 <header className="header-inicio">
    <div className="logo">
        <img src={logo}></img>
    </div>
    <nav className="nav-inicio">
        <ul className="nav-links-inicio">
            <li><Link className="nav-link"to={'/inicio/signup'}>Registro</Link></li>   
            <li><Link className="nav-link" to={'/inicio/login'}>Iniciar sesión</Link></li>
        </ul>
    </nav>
 </header>
)
}



export default NavigationStart
