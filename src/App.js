import React, { Component } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Config, CognitoIdentityCredentials } from 'aws-sdk'
import { CognitoUserPool, CognitoUserAttribute } from 'amazon-cognito-identity-js'
import AppBarAWP from './components/AppBarAWP'
import Home from './pages/Home'
import './App.css'

Config.region = 'us-east-2'
Config.credentials = new CognitoIdentityCredentials({
  IdentityPoolId: 'us-east-2_jR8FsKzhC'
})

const userPool = new CognitoUserPool({
  UserPoolId : 'us-east-2_jR8FsKzhC',
  ClientId : '6cd2s533h1jbchv0jlh8euhqsk'
})

// var userData = {
//   Username : '...', // your username here
// Pool : userPool
// };

class App extends Component {

  constructor(props) {
    super(props)
    this.handleLogin = this.handleLogin.bind(this)
    this.handleLogout = this.handleLogout.bind(this)
    this.handleEmailChange = this.handleEmailChange.bind(this)
    this.handlePasswordChange = this.handlePasswordChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  state = {
    auth: null,
    email: '',
    password: '',
    showBadEmailMsg: false,
  }

  componentDidMount() {
    fetch('https://api.github.com/gists')
      .then(res => res.json())
      .then(gists => {
        this.setState({ gists })
      })
  }

  handleLogin() {
    this.setState({ auth: true })
  }

  handleLogout() {
    this.setState({ auth: null })
  }

  handleEmailChange(e) {
    this.setState({ email: e.target.value })
  }
  
  handlePasswordChange(e) {
    this.setState({ password: e.target.value })
  }

  handleSubmit(e) {
    e.preventDefault()
    const email = this.state.email.trim()
    const password = this.state.password.trim()
    const attributeList = [
      new CognitoUserAttribute({
        Name: 'email',
        Value: email
      })
    ]
    userPool.signUp(email, password, attributeList, null, (err, result) => {
      if (err) {
        console.log(err);
        this.setState({ showBadEmailMsg: true })
        return;
      }
      console.log('user name is ' + result.user.getUsername())
      console.log('call result:')
      console.log(result)
    })
  }
  
  render() {

    return (
      <BrowserRouter>
        <div>
          <AppBarAWP
            auth={this.state.auth}
            handleLogin={this.handleLogin}
            handleLogout={this.handleLogout}
          />
          <Home />
        </div>
      </BrowserRouter>
    )
    
  }
  
}

export default App

// <Grid /> has breakpoints of ['xs', 'sm', 'md', 'lg', 'xl']
// Spacing can be 8, 16, 24, 32 or 40dp wide