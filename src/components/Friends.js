import React, { Component } from 'react'
import '../css/main.css'
import Friend from './Friend';

class Friends extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            compañeros: [],
            isLoaded: false,
        }
      }

      componentDidMount () {
          fetch('https://my-json-server.typicode.com/angelrosmend/utn-friendlist/contacts')
          .then(res => res.json())
          .then(json => {
              this.setState({
                  isLoaded: true,
                  compañeros: json
              })
          })
      }
    

    render() {

        const {isLoaded, compañeros} = this.state;
        if (!isLoaded){
            return <div className="loading">Loading...</div>;
        }else{
        return (
            <div className="container-friends">
                <div className="title">
                    <h3>Compañeros</h3>
                    <hr></hr>
                </div>
                <div className="friends-list">
                  <ul>{compañeros.map(data => (<Friend key={data.id} data={data}/>))}</ul>
                </div>
            </div>
        )
    }
}
}

export default Friends