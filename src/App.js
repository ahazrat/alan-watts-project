import { Config, CognitoIdentityCredentials } from 'aws-sdk'
import { CognitoUserPool, CognitoUserAttribute } from 'amazon-cognito-identity-js'
import React, { Component } from 'react'
import AppBarAWP from './components/AppBarAWP'
import Header from './components/Header'
import Intro from './components/Intro'
import Posts from './components/Posts'
import NewPost from './components/NewPost'
import './App.css'

Config.region = 'us-east-2'
Config.credentials = new CognitoIdentityCredentials({
  IdentityPoolId: 'us-east-2_pQapogcG8'
})

const userPool = new CognitoUserPool({
  UserPoolId : 'us-east-2_pQapogcG8',
  ClientId : '774nr4k0a1v0okcpp855gp5ch4'
})

// var userData = {
//   Username : '...', // your username here
// Pool : userPool
// };

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      showBadEmailMsg: false
    }
    this.handleEmailChange = this.handleEmailChange.bind(this)
    this.handlePasswordChange = this.handlePasswordChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
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

    const posts = [
      {
        title: 'Who Are You?',
        text: 'Trying to define yourself is like trying to bite your own teeth',
        img: 'https://i.imgur.com/snV3aGU.png'
      },
      {
        title: 'Trust The Water',
        text: 'To have faith is to trust yourself to the water. When you swim you dont grab hold of the water, because if you do you will sink and drown. Instead you relax, and float.',
        img: 'https://i.imgur.com/sktvznU.png'
      },
      {
        title: 'Living Now',
        text: 'No work or love will flourish out of guilt, fear, or hollowness of heart, just as no valid plans for the future can be made by those who have no capacity for living now.',
        img: 'https://i.imgur.com/laYPizP.jpg'
      },
    ]
    
    return (
      <div className="App">
        <AppBarAWP />
        <Header />
        <Intro />
        <Posts posts={posts} />
        <div>
          {this.state.showBadEmailMsg && <h3>Bad Email Address</h3>}
          <form onSubmit={this.handleSubmit}>
            <input type='text' value={this.state.email} placeholder='Email' onChange={this.handleEmailChange} />
            <input type='password' value={this.state.password} placeholder='Password' onChange={this.handlePasswordChange} />
            <input type='submit' />
          </form>
        </div>
        <NewPost open={false} />
      </div>
    )
    
  }
  
}

export default App

// <Grid /> has breakpoints of ['xs', 'sm', 'md', 'lg', 'xl']
// Spacing can be 8, 16, 24, 32 or 40dp wide

// asifhazrat@gmail.com
// Password1