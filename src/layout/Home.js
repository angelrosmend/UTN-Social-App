import React from 'react'
import {BrowserRouter as Router,Redirect, Switch, Route} from 'react-router-dom';
import ProfileUser from '../layout/ProfileUser'
import ProfileFriend from '../layout/ProfileFriend'
import SignUp from '../layout/SignUp'
import Navigation from '../layout/Navigation'
import Footer from '../layout/Footer'
import photo from '../img/photo.png'
import '../css/main.css'

function Home() {
    return (
    <div className="container-home">
        <Route component={Navigation}/>
        <Route path="/user" component={ProfileUser}/>
        <Route path="/friend" component={ProfileFriend}/>
        <Route path="/inicio" component={SignUp}/>
        <Route component={Footer}/>

    </div>

        )
    }

export default Home

