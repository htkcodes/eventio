import React, { Component } from 'react'
import EventListItem from './EventListItem.jsx'

export default class EventList extends Component {
  render() {
    const {events}=this.props;
    return (

      <div>
        <h1>EventList</h1>
  
     
     
       {
      events.map((events)=>(
        <EventListItem event={events} key={events.id} />
      ))
      } 
      </div>
    )
  }
}
