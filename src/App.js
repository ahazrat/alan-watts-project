import React, { Component } from 'react'
import Intro from './components/Intro'
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
        <Intro />
        <Posts data={data} />
      </div>
    )
    
  }
  
}

export default App

// <Grid /> has breakpoints of ['xs', 'sm', 'md', 'lg', 'xl']
// Spacing can be 8, 16, 24, 32 or 40dp wide