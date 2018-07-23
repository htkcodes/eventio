import React, { Component } from 'react';
import logo from './logo.svg';
import { Container } from 'semantic-ui-react/dist/commonjs';
import './App.css';
import NavBar from './components/Nav/NavBar/Navbar'
import EventDashBoard from './components/EventDashBoard/EventDashboard'

class App extends Component {
  render() {
    return (
      <div>
      <h1>EventIO</h1>
      <Container className="main">
      <NavBar/>
        <EventDashBoard/>
      </Container>
      
      </div>
    );
  }
}

export default App;
