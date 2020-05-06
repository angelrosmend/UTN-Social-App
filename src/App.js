import React, { Component } from 'react';
import './App.css';
import Home from './layout/Home'
import Inicio from './layout/Inicio'
import {Route, Redirect,} from 'react-router-dom';

class App extends Component{

  constructor(props) {
    super(props)
  
    this.state = {
       
    }
  }
  

  render(){
  return (
    <div className="App">
     <Route path="/inicio" component={Inicio}/>
     <Route path="/home" component={Home}/>
     <Redirect from={'/'} to={'/inicio/signup'} />
     </div>
  );
  }
}



export default App;
