import React from 'react'
import { Link } from 'react-router-dom'

export default function ShelterOptions(props){
  return(
    <div className="options-container">
      <button><Link to="/shelters/login">Login</Link></button>
      <button><Link to="/shelters/register">Register Shelter</Link></button>
    </div>
  )
}