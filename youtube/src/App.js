import React, { Component } from 'react';
import logo from './logo.svg';

import _ from 'lodash';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list'
import YTSearch from 'youtube-api-search'
import VideoDetail from './components/video_detail'

const API_KEY='AIzaSyABFMxcWERxc8C9k4RFrPx8LpJ6BV-dkOA';


class App extends Component {
  constructor(props)
  {
    super(props);

    this.state={
      videos:[

      ],
      selectedVideo:null
    }
this.videoSearch('suicideboys')
  }


  videoSearch(term)
  {
    YTSearch({key:API_KEY,term:term},(result)=>{
      this.setState({
        videos:result,
        selectedVideo:result[0]
      })
     })
  }
  render() {
    const videoSearch=_.debounce((term)=>{
      this.videoSearch(term)
    },300)
    return (
      <div className="App">
        <SearchBar onSearchTermChange={term => videoSearch(term)} />
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList videos={this.state.videos} onVideoSelect={
          selectedVideo=>this.setState({selectedVideo})
        } />
      </div>
    );
  }
}

export default App;
