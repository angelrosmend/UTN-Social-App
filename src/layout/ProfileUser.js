import React, { Fragment } from 'react'
import '../css/main.css'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import About from '../components/About'
import Projects from '../components/Projects'
import Friends from '../components/Friends'
import avatar from '../img/avatar.png'

function ProfileUser() {
  return (
    <Fragment>
        <div className="user-profile">
            <img src={avatar} />
            <h2>Nombre Apellido</h2>
            <p>Ciudad</p>
            <p>Email: johndoe@test.com </p>
      </div>
      <div className="container-nav-page">
        <Switch>
          <Route path="/home/user/profile" component={About}/>
          <Route path="/home/user/projects" component={Projects}/>
          <Route path="/home/user/friends" component={Friends}/>
        </Switch>
      </div>
  </Fragment>

  )
}

export default ProfileUser
