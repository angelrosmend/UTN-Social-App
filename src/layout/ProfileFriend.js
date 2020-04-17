import React from 'react'
import '../css/main.css'
import avatar from '../img/avatar.png'

function ProfileFriend() {
 return (
  <div className="container-home">
  <div className="user-profile">
      <img src={avatar}/>
       <h2>Usuario Perfil</h2>
        <p>Detalle</p>
  </div>
  <div className="container-nav-page">
  <div className="container-user">
 <h5>Curso</h5>
  <h3>Full Stack</h3>
<hr/>
<p>HTML |CSS | JavaScript | React | Angular | NodeJS</p>

<div className="social-media">
    <a href="/"
        rel="noopener noreferrer"
        target="_blank">
            <i className="fa fa-linkedin-square" aria-hidden="true" />
    </a>
    <a href="/"
        rel="noopener noreferrer"
        target="_blank">
            <i className="fa fa-github-square" aria-hidden="true" />
    </a>
    <a href="/"
        rel="noopener noreferrer"
        target="_blank">
            <i className="fa fa-youtube-square" aria-hidden="true" />
    </a>
    <a href="/"
        rel="noopener noreferrer"
        target="_blank">
            <i className="fa fa-facebook-square" aria-hidden="true" />
    </a>
    <a href="/"
        rel="noopener noreferrer"
        target="_blank">
            <i className="fa fa-twitter-square" aria-hidden="true" />
    </a>
</div>

</div>
   </div>
  </div>
 )
}

export default ProfileFriend

