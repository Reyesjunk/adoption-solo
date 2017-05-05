import React, { Component } from 'react'
import NavBar from './components/nav-bar/nav-bar.js'
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom'
import Home from './components/home/home.js'
import Search from './components/search/search.js'
import ShelterLogIn from './components/shelter-login/shelter-login.js'
import ShelterRegister from './components/shelter-register/shelter-register.js'
import ShelterOptions from './components/shelter-options/shelter-options.js' 

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <NavBar />
        <Route exact path="/" component={Home} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/shelters" component={ShelterOptions} />
        <Route exact path="/shelters/login" component={ShelterLogIn} />
        <Route exact path="/shelters/register" component={ShelterRegister} />
      </div>
      </Router>
    );
  }
}

export default App
