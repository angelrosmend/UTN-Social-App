import React from 'react'
import '../css/Inicio.css'
import logo from '../img/logo.png'
import { Link } from 'react-router-dom'

function NavigationStart() {
 return (
<div>
 <header>
     <div className="logo">
         <img src={logo}></img>
     </div>
     <nav>
         <ul className="nav-links">
             <li><Link className="nav-link"to={'/inicio/signup'}>Registro</Link></li>   
             <li><Link className="nav-link" to={'/inicio/login'}>Iniciar sesión</Link></li>
         </ul>
     </nav>
 </header>
</div>
)
}



export default NavigationStart
