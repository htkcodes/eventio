import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import Posts from "./components/Posts";
import Pusher from 'pusher-js';


const client=new ApolloClient({
  uri:"http://localhost:4000/graphql"
});



class App extends Component {

  constructor(){
    super();

    this.pusher=new Pusher("b0edbb37cc3d9318d182",{
      encrypted:true
    })
  }

  render() {

    return (
      
        <ApolloProvider client={client}>
      <div className="App">
      <Header/>
      <section className="App-main">
      <Posts pusher={this.pusher} apollo_client={client}/>
      </section>
      </div>
        </ApolloProvider>
        
    )
  }
}




export default App;
