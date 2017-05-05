import React from 'react'
import { connect } from 'react-redux'
import { fetchLogInData } from '../../actions/actions.js' 

export class ShelterLogIn extends React.Component{
  handleLogIn(event) {
    event.preventDefault()
    this.props.dispatch(fetchLogInData(this.email.value, this.password.value))
  }
  render(){
  return(
    <div className="login-container">
      <form onSubmit={(e)=> this.handleLogIn(e)}>
        <label htmlFor="email"></label>
        <input id="email" ref={email => this.email = email } type="text" placeholder="email" /><br />
        <label htmlFor="password"></label>
        <input id="password" ref={password => this.password = password} type="text" placeholder="password" />
        <button>Login</button>
      </form>
    </div>
  )
  }
}

export default connect()(ShelterLogIn)