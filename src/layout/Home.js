import React from 'react'
import {BrowserRouter as Router,Redirect, Switch, Route} from 'react-router-dom';
import ProfileUser from '../layout/ProfileUser'
import ProfileFriend from '../layout/ProfileFriend'
import SignUp from '../layout/SignUp'
import NavigationUser from './NavigationUser'
import Footer from '../layout/Footer'
import photo from '../img/photo.png'
import '../css/main.css'

function Home() {
    return (
    <div className="container-home">
        <Route component={NavigationUser}/>
        <Route path="/home/user" component={ProfileUser}/>
        <Route path="/home/friend/:id" component={ProfileFriend}/>
        <Route path="/inicio" component={SignUp}/>
        <Route component={Footer}/>
    </div>

        )
    }

export default Home

