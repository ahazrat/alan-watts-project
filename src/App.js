import React, { Component } from 'react'
import Header from './components/Header'
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
        title: 'Where Is God?',
        text: 'You dont look out there for God, something in the sky, you look in you.',
        img: 'https://i.imgur.com/Aqg5LQy.png'
      },
      {
        title: 'Living Now',
        text: 'No work or love will flourish out of guilt, fear, or hollowness of heart, just as no valid plans for the future can be made by those who have no capacity for living now.',
        img: 'https://i.imgur.com/laYPizP.jpg'
      },
    ]
    
    return (
      <div className="App">
        <Header />
        <Intro />
        <Posts posts={posts} />
      </div>
    )
    
  }
  
}

export default App

// <Grid /> has breakpoints of ['xs', 'sm', 'md', 'lg', 'xl']
// Spacing can be 8, 16, 24, 32 or 40dp wide