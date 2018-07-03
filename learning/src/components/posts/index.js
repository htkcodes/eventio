import React, { Component } from 'react'
import './post.css'
class Post extends Component {
  render() {
    return (
      
        <article className="post" ref="post">
            <header>
                <div className="user-post">
                    <div className="user-avatar"><img src="https://www.laravelnigeria.com/img/chris.jpg" alt="" srcset=""/>
                    
                    </div>
                </div>
                <div className="user-alias">
                <span>htk_codes</span>
                </div>
            </header>
            <div className="post-image">
                <div className="post-image-bg">
                    <img src="https://pbs.twimg.com/media/DOXI0IEXkAAkokm.jpg" alt=""/>
                </div>
            <div className="post-caption"><strong>Its Lit</strong></div>
            </div>
        </article>
      
    )
  }
}

export default Post;
