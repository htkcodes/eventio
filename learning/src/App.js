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
        <Post alias="htk_codes" avatar="https://www.laravelnigeria.com/img/chris.jpg" caption="Moving the community!" image="https://pbs.twimg.com/media/DOXI0IEXkAAkokm.jpg"  />
        <Post alias="htk_code" avatar="https://www.laravelnigeria.com/img/chris.jpg" caption="Moving the community!" image="https://pbs.twimg.com/media/DOXI0IEXkAAkokm.jpg"  />
      </div>
    </div>
    );
  }
}

export default App;
