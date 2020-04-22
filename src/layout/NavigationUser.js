import React from 'react'
import '../css/main.css'
import logo from '../img/logo.png'
import { Link } from 'react-router-dom'

function NavigationUser() {
return (
<header className="header-user">
    <div className="logo">
        <img src={logo}></img>
    </div>
    <nav nav="nav-user">
        <ul className="nav-links-user">
            <li><Link className="nav-link-user"to={'/home/user/profile'}>Perfil</Link></li>
            <li><Link className="nav-link-user"to={'/home/user/projects'}>Proyectos</Link></li>   
            <li><Link className="nav-link-user"to={'/home/user/friends'}>Amigos</Link></li>   
            <li><Link className="nav-link-user" to={'/inicio/signup'}>Cerrar sesión</Link></li>
        </ul>
    </nav>
</header>
)
}

export default NavigationUser
