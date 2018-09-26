import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'

import Post from './components/Post'

import './App.css'
import logo from './logo.svg'

class App extends Component {
  
  render() {
    
    const data = [1,2,3,4]
    
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Alan Watts Project</h1>
        </header>
        <p className="App-intro">
          the vision is a website that is a constantly updated resource<br />
          for material by and relating to the work of Alan Watts<br />
          <code>Derivative writings, brainpickings articles, dance, music, and art videos</code> using his words<br />
          Tons of resources out there to pool them in one place<br />
          and serves as a meaningful way for people to connect<br />
          people interested in curating and posting the content<br />
        </p>
        <Button variant='contained' color='primary'>
          Create new Post
        </Button>
        <ul style={{textAlign: 'left'}}>
          <li>create components folder</li>
          <li>Create Singular Post</li>
          <li>Create Posts Display</li>
        </ul>
        <Grid container spacing={24}>
          <Post id='1' />
          <Post id='2' />
          <Post id='3' />
          <Post id='4' />
        </Grid>
      </div>
    )
    
  }
  
}

export default App