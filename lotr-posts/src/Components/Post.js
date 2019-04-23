import React from 'react';


const smurf ={
  display: 'flex',
  justifyContent:'center',
  alignItems:'center'
}

const items ={
margin: '15px'
}
const Post = props => {
  return (
    <div style={smurf}>
      <h3 style={items}>{props.title}</h3>
      <p style={items}>{props.contents}</p>
      <span className="far fa-trash-alt delete-btn" onClick={() => props.deletePost(props.id)}></span>
    </div>
  );
};

Post.defaultProps = {
  title: '',
  content: '',

};

export default Post;