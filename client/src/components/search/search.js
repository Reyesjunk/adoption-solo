import React from 'react'

import './search.css'

export default function Search(props){
  return(
    <div className="search-container">
      <div className="form-container">
        <form action=""></form>
        <label htmlFor="type"></label>
        <input id="type" type="text" placeholder="Type of pet" />
        <label htmlFor="zip"></label>
        <input type="text" className="zip" placeholder="Zip Code" />
        <button className="btn">Search</button>
      </div>
    </div>
  )
}