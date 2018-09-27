import React, { Component } from 'react'
import Posts from './components/Posts'

import './App.css'
import logo from './logo.svg'

class App extends Component {
  
  render() {
    
    const data = [
      'connect data to generate posts',
      'get alan watts pictures',
      'store pictures in s3',
      'access pictures by reference',
    ]
    
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
        <ul style={{textAlign: 'left'}}>
        </ul>
        <Posts data={data} />
      </div>
    )
    
  }
  
}

export default App

// <Grid /> has breakpoints of ['xs', 'sm', 'md', 'lg', 'xl']
// Spacing can be 8, 16, 24, 32 or 40dp wide