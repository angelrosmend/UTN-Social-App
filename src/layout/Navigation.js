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
                        <li className="nav-link"><Link to={'/user/profile'}>Perfil</Link></li>
                        <li className="nav-link"> <Link to={'/user/friends'}>Amigos</Link></li>   
                        <li className="nav-link">Proyectos</li>
                        <li className="nav-link">Cerrar sección</li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}

export default Navigation
