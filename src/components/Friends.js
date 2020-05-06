import React,{useState, useEffect, Component} from 'react';
import '../css/main.css'
import Friend from './Friend';
import firebase from '../config/firebase'

class Friends extends Component {
/*useEffect(() => {
    fetchFriends()
    .then(
        (error) => {
            console.log(error)
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
    }else{    }*/
    constructor(props) {
        super(props)
    
        this.state = {
             friends: [],
             isLoaded: false
        }
    }
    componentDidMount(){
        firebase.database().ref('contacts/').once('value').then(snapshot=>{
            console.log(snapshot.val())
            this.setState({
                friends: snapshot.val(),
                isLoaded: true
            })
        })
    }
    render() {
    return (
        <div className="container-friends">
            <div className="title">
                <h3>Compañeros</h3>
                <hr></hr>
            </div>
            <div className="friends-list">
                {Object.keys(this.state.friends).map((k,v)=> (<Friend key={this.state.friends[k]} data={this.state.friends[k]}/>))}
               {/* <ul>{friends.map(data => (<Friend key={data.id} data={data}/>))}</ul>*/}
            </div>
        </div>
    )

    }

}


export default Friends