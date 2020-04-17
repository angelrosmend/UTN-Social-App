import React from 'react';
import './App.css';
import Home from './layout/Home'
import { BrowserRouter, Route, Redirect,Switch,} from 'react-router-dom';
import Navigation from './layout/Navigation'
import Footer from './layout/Footer'


function App() {
  return (
    <BrowserRouter>
    <div className="App">
     <Route path="/" component={Home}/>
     <Redirect from={'/'} to={'/user/profile'} />
   </div>
   </BrowserRouter>
  );
}



export default App;
