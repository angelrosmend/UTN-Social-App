import React, { Component } from 'react'
import '../css/Inicio.css'


class SignUp extends Component {
 constructor(props) {
     super(props);
     console.log(this.props.title)
     this.handleSubmit = this.handleSubmit.bind(this)
     this.handleChange = this.handleChange.bind(this)
     this.state={
         nombre:'',
         apellido: '',
         email: '',
         password:''
     }
 }

 handleSubmit(e) {
     console.log(this.state);
     e.preventDefault();
 }

 handleChange(e){
     const target = e.target;
     const value = target.value;
     const name = target.name;

     this.setState({
         [name]:value
     })
     e.preventDefault();
 }
 
 render() {

return (
<div className="container-sign-up">
    <div className="header-titulo">
      <h2>Registro</h2>
      <hr />
    </div>
    <div className="form">
      <form onSubmit={this.handleSubmit}>
        <div className="input-group" > 
          <input type="text"
                 name="nombre"   
                 placeholder="Nombre"  
                 value={this.state.nombre} 
                 onChange={this.handleChange}/>
          <input type="text" 
                 name="apellido" 
                 placeholder="Apellido" 
                 value={this.state.apellido} 
                 onChange={this.handleChange}/>
        </div>
        <div className="input-group">
          <input type="text" 
                 name="email" 
                 placeholder="Email" 
                 value={this.state.email} 
                 onChange={this.handleChange}/>
          <input type="password" 
                 name="password" 
                 placeholder="Contraseña" 
                 value={this.state.password} 
                 onChange={this.handleChange}/>
        </div>

    <div className="boton">
      <button type="submit" className="submit-btn">REGISTRARSE</button>
   </div>
   
  </form>
 </div>
</div>
  )
 }
}

export default SignUp
