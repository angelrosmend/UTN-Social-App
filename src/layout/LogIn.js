import React, { Component } from 'react'
import '../css/Inicio.css'
import { Link, } from 'react-router-dom';

class LogIn extends Component {
constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    /*this.handleClick = this.handleClick.bind(this)*/
    this.state = {
    usuario:'',
    password:'',
    };
}

handleSubmit(e) {
    e.preventDefault(); 
    console.log(this.state);
}
/* handleClick(e){
if(this.state.usuario === "user" && this.state.password ==="1234"){
    BrowserHistory.push("/home/user/profile")
    } else {
        alert("datos incorrectos")
    }
}*/

handleChange(e){
    const target = e.target;
    const value = target.value;
    const name = target.name;
    this.setState ({
        [name]: value 
    })
    e.preventDefault(); 
}


render() {
return (
<div className="container-log-in">
    <div className="header-titulo">
        <h2>Iniciar sesión</h2>
        <hr />
    </div>
    <div className="form">
    <form onSubmit={this.handleSubmit}>  
        <div className="input-group" > 
            <input 
            type="text" 
            name="usuario" 
            placeholder="Usuario" 
            value={this.state.usuario} 
            onChange={this.handleChange}/>

            <input 
            type="password" 
            name="password" 
            placeholder="Contraseña" 
            value={this.state.password} 
            onChange={this.handleChange}/>
        </div>
        <div className="boton">
                <button 
                type="submit" 
                className="submit-btn"
                onClick={this.handleClick}>
                    <Link className="link" to="/home/user/profile">INGRESAR</Link>
                </button>
        </div>
    </form>

    </div>
    
</div>
)
}
}

export default LogIn
