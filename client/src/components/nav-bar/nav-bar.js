import React from 'react'
import './nav-bar.css'
import { Link } from 'react-router-dom'

export default function NavBar(props){
  return(
    <div className="nav-bar">
      <ul>
        <li><Link to="/">adoptme</Link></li>
        <li><Link to="/">about</Link></li>
        <li><Link to="/search">search</Link></li>
        <li><Link to="/shelters">shelters</Link></li>
      </ul>
    </div>
  )
}