import React, { Component } from 'react';
import './App.css';
import Home from './layout/Home'
import Inicio from './layout/Inicio'
import {Route, Redirect,} from 'react-router-dom';
import * as firebase from 'firebase'

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDu7YUBpxVj6CMi715-KJWhFcPiR_EJloY",
    authDomain: "utn-social-app.firebaseapp.com",
    databaseURL: "https://utn-social-app.firebaseio.com",
    projectId: "utn-social-app",
    storageBucket: "utn-social-app.appspot.com",
    messagingSenderId: "670711872381",
    appId: "1:670711872381:web:09a5ed748d61b409c66a14"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  console.log(firebase)


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
