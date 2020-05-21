import React from 'react'
import { Link } from 'react-router-dom'
import Add from './Add'
import '../css/main.css'
import avatar from '../img/avatar.png'

function Friend({data, id}) {
    return (
     <li className="friend">
        <div className="avatar">
            <img src={avatar}/>
        </div>
        <div className="friend-info">
        <Link className="link-friend-profile" to={`/home/friend/`+id}>
            <h5>{data.nombre} {data.apellido}</h5>
            </Link>
            <p>{data.ciudad}</p>
        </div>
        <Add />

     </li>
    )
}

export default Friend
