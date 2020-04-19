import React,{useState, useEffect} from 'react';
import '../css/main.css'
import avatar from '../img/avatar.png'


function ProfileFriend({ match }) {
    useEffect(() => {
        fetchFriend();
        console.log(match);
       },[]);
      
       const [friend, setFriend] = useState({})
      
       const fetchFriend = async () => {
          const fetchFriend = await fetch(
         `https://my-json-server.typicode.com/angelrosmend/utn-friendlist/contacts/${
          match.params.id
         }`
        );
        const friend = await fetchFriend.json();
        setFriend(friend);
        console.log(friend);
       }



 return (
  <div className="container-home">
  <div className="friend-profile">
      <img src={friend.avatar}/>
       <h2>{friend.nombre}</h2>
       <p>{friend.ciudad}</p>
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

