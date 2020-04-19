import React, { Fragment } from 'react'
import '../css/main.css'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import About from '../components/About'
import Projects from '../components/Projects'
import Friends from '../components/Friends'
import photo from '../img/photo.png'

function ProfileUser() {
 return (
  <Fragment>
  <div className="user-profile">
 <img src={photo} />
 <h2>Angel J. Rosales</h2>
 <p>Buenos Aires</p>
 </div>
 <div className="container-nav-page">
   <Switch>
   <Route path="/user/profile" component={About}/>
   <Route exact path="/user/projects" component={Projects}/>
   <Route exact path="/user/friends" component={Friends}/>
   </Switch>
 </div>
 </Fragment>

 )
}

export default ProfileUser
