import React from 'react'
import  '../App.css'
import '../bootstrap.css'
export default (props) => {
    const { video,onVideoSelect } =props
    const imgUrl=video.snippet.thumbnails.default.url;


 //   console.log(video)
  return (
  
      <li onClick={()=>onVideoSelect(video)} className="list-group-item">
      <div className="video-list media">
      <div className="media-left">
      <img src={imgUrl} alt="" className="media-object"/>
      <div className="media-body">
      <div className="media-heading">{video.snippet.title}</div>
      </div>
      </div>
      </div>
      </li>

  )
}
