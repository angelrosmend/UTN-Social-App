import React,{useState, useEffect} from 'react';
import '../css/main.css'
import Friend from './Friend';

function Friends() {
useEffect(() => {
    fetchFriends()
    .then(
        (error) => {
            console.log(error.message)
        }
    )},[]);
    
    const [friends, setFriends] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false)
    
    const fetchFriends = async () => {
    const data = await fetch('https://my-json-server.typicode.com/angelrosmend/utn-friendlist/contacts');
    
    const friends = await data.json();
    console.log(friends);
    setFriends(friends);
    setIsLoaded(true)
    }

    if(!isLoaded){
        return (
            <div className="loading">Loading...</div>
        )
    }else{
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
}


export default Friends
