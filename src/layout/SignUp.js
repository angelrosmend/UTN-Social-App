import React, { useState, useEffect, Component } from 'react'
import { useHistory } from "react-router-dom"
import '../css/Inicio.css'
import firebase from '../config/firebase'


function SignUp() {

  const history = useHistory();

  function handleClick(){
      history.push("/inicio/signup")
  }

  const [form, setForm] = useState({
    nombre: '',
    apellido: '',
    email: '',
    password: '',
    curso: '',
    ciudad: ''
})

  function handleSubmit(e) {

     let email = form.email;
     let password = form.password;
     firebase.auth.createUserWithEmailAndPassword(email, password)
     .then((data) =>{
         console.log("Usuario creado", data.user.uid)
         firebase.db.collection("usuarios").add({
             nombre: form.nombre,
             apellido: form.apellido,
             email: form.email,
             ciudad: form.ciudad,
             curso: form.curso,
             userId: data.user.uid
         })
         .then((data)=>{
             console.log(data)
             history.push("/inicio/login")
         })  
         .catch((err)=>{
            console.log(err)
            alert(err)
        })
    })
    .catch((error) => {
        console.log("Error", error)
        alert(alert)
    })
    e.preventDefault();
 }

 function handleChange(e){

     const target = e.target;
     const value = target.value;
     const name = target.name;

     setForm({
         ...form,
         [name]:value
     });
     e.preventDefault();
 }

 
  return (
   <div className="container-sign-up">
     <div className="header-titulo">
         <h2>Registro</h2>
         <hr />
     </div>
    <div className="form">
     <form onSubmit={handleSubmit}>
         <div className="input-group" > 

         <input  type="text" 
                 name="nombre"   
                 placeholder="Nombre"  
                 value={form.nombre} 
                 onChange={handleChange}/>

         <input  type="text" 
                 name="apellido" 
                 placeholder="Apellido" 
                 value={form.apellido} 
                 onChange={handleChange}/>
        </div>

        <div className="input-group" > 

          <input type="text" 
                 name="ciudad"   
                 placeholder="Ciudad"  
                 value={form.ciudad} 
                 onChange={handleChange}/>

          <input type="text" 
                 name="email" 
                 placeholder="Email" 
                 value={form.email} 
                 onChange={handleChange}/>
        </div>

        <div className="input-group">

        <select name="curso" 
                value={form.curso} 
                onChange={handleChange}>
            <option value={null}>Curso</option>       
            <option value="React">React JS</option>
            <option value="Angular">Angular JS</option>
            <option value="Node">Node JS</option>
            <option value="Full Stack">Full Stack</option>
        </select>

        <input type="password" 
               name="password" 
               placeholder="Contraseña" 
               value={form.password} 
               onChange={handleChange}/>
         </div>

         <div className="boton">
            <button type="submit"
                    className="submit-btn" 
                    onClick={handleClick}>
                        REGISTRARSE
            </button>
            
         </div>
        </form>
       </div>
      </div>
  )
}

export default SignUp
