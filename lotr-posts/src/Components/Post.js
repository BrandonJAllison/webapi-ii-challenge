import React from 'react';


const post ={
  display: 'flex',
  justifyContent:'center',
  alignItems:'center'
}

const items ={
margin: '15px'
}
const Post = props => {
  return (
    <div style={post}>
      <h3 style={items}>{props.title}</h3>
      <span  onClick={() => props.deletePost(props.id)}> <i className="fas fa-dungeon"></i></span>
    </div>
  );
};

Post.defaultProps = {
  title: '',
  content: '',

};

export default Post;