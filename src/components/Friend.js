import React from 'react'
import { Link } from 'react-router-dom'
import Add from './Add'
import '../css/main.css'


function Friend({data}) {
    return (
     <li className="friend">
        <div className="avatar">
            <img src={data.avatar}/>
        </div>
        <div className="friend-info">
            <h5>{data.nombre}</h5>
            <p>{data.ciudad}</p>
        </div>
        <Add added={data.data} />

     </li>
    )
}

export default Friend
