import React,{useState, useEffect} from 'react';
import '../css/main.css'
import Friend from './Friend';

function Friends() {
    useEffect(() => {
        fetchFriends();
       },[]);
      
       const [friends, setFriends, isLoaded] = useState([]);
      
       const fetchFriends = async () => {
        const data = await fetch('https://my-json-server.typicode.com/angelrosmend/utn-friendlist/contacts');
        
        
        const friends = await data.json();
        console.log(friends);
        setFriends(friends);
       }

        return (
            <div className="container-friends">
                <div className="title">
                    <h3>Compañeros</h3>
                    <hr></hr>
                </div>
                <div className="friends-list">
                  <ul>{friends.map(data => (<Friend key={data.id} data={data}/>))}</ul>
                </div>
            </div>
        )
}


export default Friends