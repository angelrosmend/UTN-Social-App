import React from 'react'
import '../css/Navigation.css'
import logo from '../img/logo.png'
import { Link } from 'react-router-dom'

function Navigation() {
return (
<div>
    <header>
        <div className="logo">
            <img src={logo}></img>
        </div>
        <nav>
            <ul className="nav-links">
                <li><Link className="nav-link"to={'/user/profile'}>Perfil</Link></li>
                <li><Link className="nav-link"to={'/user/projects'}>Proyectos</Link></li>   
                <li><Link className="nav-link"to={'/user/friends'}>Amigos</Link></li>   
                <li><Link className="nav-link" to={'/inicio'}>Cerrar sección</Link></li>
            </ul>
        </nav>
    </header>
</div>
)
}

export default Navigation
