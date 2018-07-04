import React, { Component } from 'react'
import './post.css'
class Post extends Component {
    constructor(props)
    {
        super(props);
    }
  render() {

    const alias=this.props.alias;
    const avatar=this.props.avatar;
    const image=this.props.image;
    const caption=this.props.caption;
    return (
      
        <article className="post" ref="post">
            <header>
                <div className="user-post">
                    <div className="user-avatar"><img src={avatar} alt={alias} srcset=""/>
                    </div>
                    <span>{alias}</span>
                </div>
              
            </header>
            <div className="post-image">
                <div className="post-image-bg">
                    <img src={image} alt={caption}/>
                </div>
            <div className="post-caption"><strong>{caption}</strong></div>
            </div>
        </article>
      
    )
  }
}

export default Post;
