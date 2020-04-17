import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import '../css/main.css'


class Add extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             added: props.added
        }
        this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick(e) {
        this.setState({ added: !this.state.added});

    }

    render() {
        const buttonText = this.state.added ? 'Remover Amigo': 'Agregar Amigo';
        const stateText = this.state.added ? 'Es mi amigo' : '';
        const viewProfile = this.state.added ? 'Ver perfil' : '';
        return (
        <Fragment>
         <div className="state">
            <p>{stateText}</p>
            <Link to={`/friend/`}>{viewProfile}</Link>
         </div>
         <div className="btn">
            <button type="button" onClick={this.handleClick}>{buttonText}</button>
         </div>
        </Fragment>
        )
    }
}

export default Add
