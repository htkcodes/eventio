import React, { Component } from "react";
import "./post.css";

class Post extends Component {
  render() {
    const alias = this.props.alias;
    const avatar = this.props.avatar;
    const image = this.props.image;
    const caption = this.props.caption;
    return (
      <article className="post" ref="post">
        <header>
          <div className="user-post">
            <div className="user-avatar">
              <img src={avatar} alt={alias} />
            </div>
            <div className="user-alias">
              <span>{alias}</span>
            </div>
          </div>
        </header>
        <div className="post-image">
          <div className="post-image-bg">
            <img alt={caption} src={image} />
          </div>
        </div>
        <div className="post-caption">
          <strong>{alias}</strong> {caption}
        </div>
      </article>
    );
  }
}

export default Post;