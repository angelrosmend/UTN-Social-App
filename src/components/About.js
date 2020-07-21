import React from 'react'
import '../css/main.css'



function Profile(){
return (

<div className="container-user">
 <h5>Curso</h5>
 <h3>Full Stack Web Developer</h3>
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
)
} 
export default Profile
