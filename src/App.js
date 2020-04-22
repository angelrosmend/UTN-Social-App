import React from 'react';
import './App.css';
import Home from './layout/Home'
import Inicio from './layout/Inicio'
import {Route, Redirect,} from 'react-router-dom';



function App() {
  return (
    <div className="App">
     <Route path="/inicio" component={Inicio}/>
     <Route path="/home" component={Home}/>
     <Redirect from={'/'} to={'/inicio/signup'} />
     </div>
  );
}



export default App;
