import React from 'react';

export default class ShelterRegister extends React.Component{
  postShelter() {
    const payload = {
      name: this.refs.name.value,
      email: this.refs.email.value,
      password: this.refs.password.value,
      street: this.refs.street.value,
      city: this.refs.city.value,
      state: this.refs.state.value,
      zipcode: this.refs.zipcode.value,
      type: this.refs.type.value
    };
    return fetch('/api', {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: "POST",
      body: JSON.stringify(payload)
    })
    .then(() => {
      this.refs.name.value = '';
      this.refs.email.value = '';
      this.refs.password.value = '';
      this.refs.street.value = '';
      this.refs.city.value = '';
      this.refs.state.value = '';
      this.refs.type.value='';
      this.refs.zipcode.value = '';
    })
  }
  handleSubmit(event){
    event.preventDefault();
    this.postShelter();
  }
  render() {
    console.log("IT LOADED");
    return(
      <div className="form-container">
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <input name="name" id="name" ref="name" type="text" placeholder="Name" /><br />
          <input name="type" id="type" ref="type" type="text" placeholder="Type" /><br />
          <input name="email" id="email" ref="email" type="text" placeholder="Email" /><br />
          <input name="password" id="password" ref="password" type="text" placeholder="Password" /><br />
          <input name="street" id="street" ref="street" type="text" placeholder="Street" /><br />
          <input name="city" id="city" ref="city" type="text" placeholder="City" /><br />
          <input name="state" id="state" ref="state" type="text" placeholder="State" /><br />
          <input name="zipcode" id="zipcode" ref="zipcode" type="text" placeholder="Zipcode" /><br />
          <button>submit</button>
        </form>
      </div>
    )
  }
}