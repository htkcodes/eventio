import React from 'react'
import '../App.css';
import '../bootstrap.css'
export default (props) => {
    const {video}=props;

    if(!video)
    {
        return (
            <div>Loading</div>
        )
    }
    const { videoId }=video.id
    const url=`https://youtube.com/embed/${videoId}` 
  return (
    <div className="video-detail col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
      <iframe src={url}  className="embed-responsive-item" title={video.snippet.title}></iframe>
      </div>
      <div className="details">
          <div>{video.snippet.title}</div>
          <div>{video.snippet.description}</div>
      </div>
    </div>
  )
}
