import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Post from './components/Posts'

class App extends Component {
  render() {
    return (
      <div>
      <Header />
      <div>
        <Post />
      </div>
    </div>
    );
  }
}

export default App;
