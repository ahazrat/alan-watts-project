import React, { Component } from 'react'
import Intro from './components/Intro'
import Posts from './components/Posts'

import './App.css'
import logo from './logo.svg'

class App extends Component {
  
  render() {
    
    const todo = [
      'get alan watts pictures',
      'fix cards to look good',
    ]

    const alan_pics = [
      'https://i.imgur.com/snV3aGU.png',
      'https://i.imgur.com/sktvznU.png',
      'https://i.imgur.com/Aqg5LQy.png',
      'https://i.imgur.com/laYPizP.jpg',
    ]
    
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Alan Watts Project</h1>
          <p style={{margin: '0'}}>
                the vision is a website that is a constantly updated resource<br />
                for material by and relating to the work of Alan Watts<br />
                <code>Derivative writings, brainpickings articles, dance, music, and art videos</code> using his words<br />
                Tons of resources out there to pool them in one place<br />
                and serves as a meaningful way for people to connect<br />
                people interested in curating and posting the content<br />
            </p>
        </header>
        <Intro />
        <Posts alan_pics={alan_pics} />
      </div>
    )
    
  }
  
}

export default App

// <Grid /> has breakpoints of ['xs', 'sm', 'md', 'lg', 'xl']
// Spacing can be 8, 16, 24, 32 or 40dp wide