import React from 'react'
import {BrowserRouter as Router,Redirect, Switch, Route} from 'react-router-dom';
import NavigationStart from './NavigationStart'
import LogIn from '../layout/LogIn'
import SignUp from '../layout/SignUp'
import Footer from '../layout/Footer'
import '../css/Inicio.css'

function Inicio() {
 return (
  <div className="container-inicio">
      <Route component={NavigationStart}/>
      <Route path="/inicio/signup" component={SignUp}/>
      <Route path="/inicio/login" component={LogIn}/>
      <Route component={Footer}/>

  </div>
 )
}

export default Inicio
