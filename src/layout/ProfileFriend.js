import React,{useState, useEffect} from 'react';
import firebase from 'firebase'
import '../css/main.css'
import avatar from '../img/avatar.png'


function ProfileFriend(props) {
    const [friend, setFriend] = useState({})


    useEffect(
        () => {
        const id = props.match.params.id;
        firebase.db.doc("usuarios/"+id)
        .get()
        .then(doc =>{
            setFriend( doc.data() )
            console.log(doc.data())
        })
       },[]); 
      
       
 return (
  <div className="container-home">
  <div className="friend-profile">
      <img src={avatar}/>
       <h2>{friend.nombre}
          {friend.apellido}</h2>
       <p>{friend.ciudad}</p>
       <p>Email: {friend.email}</p>
  </div>
  <div className="container-nav-page">
  <div className="container-profile-friend">
 <h5>Curso:</h5>
 <h3>{friend.curso}</h3>
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

