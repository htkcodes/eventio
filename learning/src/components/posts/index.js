import React,{Component} from 'react'
import '../Post/post.css'
import { Query } from "react-apollo";
import gql from "graphql-tag";
import Post from "../Post"

class Posts extends Component {

    constructor(props)
    {
        super(props)
        this.state={
            posts:[]
        }

    }

  componentDidMount()
  {
      this.props.apollo_client
      .query({
          query:gql(`
          {
            posts(user_id: "a"){
              id
              user{
               alias
                avatar
              }
              image
              caption
            }
          } 
        `)
      }).then(res=>{
          this.setState({posts:res.data.posts})
      });

      this.posts_channel=this.props.pusher.subscribe('master-thorns-814');
      this.posts_channel.bind("new-post",data=>{
        this.setState({posts:this.state.posts.concat(data.post)})
       // this.setState({posts:this.state.posts.concat(data.post)});
      },this);
  }

  render(){
      return(
          <div className="post">
          {this.state.posts.slice().reverse().map(post=> <Post alias={post.user.alias} avatar={post.user.avatar} image={post.image} caption={post.caption} key={post.id}/>)}
          </div>  
            )
  }

}



export default Posts;