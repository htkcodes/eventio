import React, { Component } from 'react'
import '../App.css'

export default class SearchBar extends Component {

    constructor(props)
    {
        super(props)
        

        this.state={
            term:''
        }
    }
  render() {
    return (
      <div className="search-bar">
        <input value={this.state.term} onChange={this.onInputChange}  />
      </div>
    )
  }

  onInputChange=(e)=>
  {
    let term=e.target.value;
     this.setState({term});
     this.props.onSearchTermChange(term);
  }

}
