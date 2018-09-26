import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Alan Watts Project</h1>
        </header>
        <p className="App-intro">
          the vision is a website that is a constantly updated resource<br />
          for material by and relating to Alan's work<br />
          <code>Derivative writings, brainpickings articles, dance, music, and art videos</code> using his words<br />
          Tons of resources out there to pool them in one place<br />
          and serves as a meaningful way for people to connect<br />
          people interested in curating and posting the content<br />
        </p>
      </div>
    );
  }
}

export default App;
