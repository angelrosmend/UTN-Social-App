import React, { Component } from 'react'
import '../css/LogIn.css'


export class SignUp extends Component {
 render() {
  return (
   <div className="container-sign-up">
     <div className="header-titulo">
         <h2>Registro</h2>
         <hr />
     </div>
     <div className="form">
     <form>
         <div className="input-group" > 
             <input type="text" name="nombre"   placeholder="Nombre" />
             <input type="text" name="apellido" placeholder="Apellido" />
         </div>
         <div className="input-group">
         <input type="text" name="email" placeholder="Email" />
         <input type="phone" name="Telefono" placeholder="Telefono" />
         </div>
         <div class="input-group">
             <input type="password" name="password" placeholder="Contraseña" />
             <input type="password" name="password" placeholder="Confirmar contraseña" />
         </div>
         <div className="boton">
                 <button type="submit" class="submit-btn ">REGISTRARSE</button>
         </div>
         
        
     </form>

     </div>
     
 </div>
  )
 }
}

export default SignUp
