import React,{Component} from 'react';
import '../css/main.css'
import Friend from './Friend';
import firebase from '../config/firebase'

class Friends extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             friends: [],
             isLoaded: false
        }
    }
    componentDidMount(){
        firebase.db.collection("usuarios")
        .get()
        .then(querySnapshot =>{
            console.log("loaded", querySnapshot.docs);
            this.setState({
                friends: querySnapshot.docs,
                isLoaded: true
            })

        })
    }
    render() {
    const  loaded = this.state.isLoaded
     if(!loaded){
            return <div className="loading">Loading...</div>
        }else{

    return (
        <div className="container-friends">
            <div className="title">
                <h3>Compañeros</h3>
                <hr></hr>
            </div>
            <div className="friends-list">
                {this.state.friends.map((doc)=> (<Friend id={doc.id} data={doc.data()}/>))}
            </div>
        </div>
    )
 }
 }
}



export default Friends