import React from 'react'

function Projects() {
 return (
  <div className="container-projects">
   <h3>Proyectos</h3>
   <hr/>
   <div className="projects-list">
    <div className="modulo-1">
    <h6>Modulo 1</h6>
   <div className="md-1">

    <a 
        href="/"
        rel="noopener noreferrer"
        target="_blank">
            <i className="fa fa-linkedin-square" aria-hidden="true" />
            <p className="unidades">Unidad 1: Web layout</p>
    </a>
    <a href="/"
        rel="noopener noreferrer"
        target="_blank">
            <i className="fa fa-github-square" aria-hidden="true" />
            <p className="unidades">Unidad 2: ES6 Calculadora</p>
    </a>
    <a href="/"
        rel="noopener noreferrer"
        target="_blank">
            <i className="fa fa-youtube-square" aria-hidden="true" />
            <p className="unidades">Unidad 3: App React</p>
    </a>
    <a href="/"
        rel="noopener noreferrer"
        target="_blank">
            <i className="fa fa-facebook-square" aria-hidden="true" />
            <p className="unidades">Unidad 4: Perfil Usuario</p>
    </a>
    </div>
   </div>


   <div className="modulo-2">
    <h6>Modulo 2</h6>
    <div className="md-2">
    <a href="/"
        rel="noopener noreferrer"
        target="_blank">
            <i className="fa fa-linkedin-square" aria-hidden="true" />
            <p className="unidades">Unidad 1: Botton Agregar</p>
    </a>
    <a href="/"
        rel="noopener noreferrer"
        target="_blank">
            <i className="fa fa-github-square" aria-hidden="true" />
            <p className="unidades">Unidad 2: API rest</p>
    </a>
    <a href="/"
        rel="noopener noreferrer"
        target="_blank">
            <i className="fa fa-youtube-square" aria-hidden="true" />
            <p className="unidades">Unidad 3: React Router</p>
    </a>
    <a href="/"
        rel="noopener noreferrer"
        target="_blank">
            <i className="fa fa-facebook-square" aria-hidden="true" />
            <p className="unidades">Unidad 4: Eventos</p>
    </a>
    </div>
    </div>
   </div>
   </div>
 )
}

export default Projects
