import React, { Component } from 'react';
import Post from './Post';
import './Components.css'

const heading ={
  textAlign: 'center'
}

const icon ={
    textAlign: 'center',
    color: '#CFAA4E'
  }

  const header ={
    textAlign: 'center',
    fontSize: '1rem',
    padding: '20px'

   
  }

  const headertwo ={
    textAlign: 'center',
    fontSize: '2rem',
    
  }
class Posts extends Component {

 

  render() {
    return (
      <div className="box">

         <p style={icon}><i className="fas fa-ring fa-5x fa-spin"></i></p>
         <p style={heading}>----- One Ring to Rule Them All -----</p>
        <p style={headertwo}>Posts</p>
        <ul style={header}>
          {this.props.posts.map(posts => {
            return (
              <Post
              title={posts.title}
              id={posts.id}
              contents={posts.contents}
              key={posts.id}
              deletePost={this.props.deletePost}
              />
            
            );
          })}
        </ul>
      </div>
    );
  }
}

Post.defaultProps = {
 posts: [],
};

export default Posts;