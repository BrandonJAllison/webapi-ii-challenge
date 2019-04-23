import React, { Component } from 'react';


const form ={
  display: 'flex',
  flexDirection: 'column',
  alignItems:'center',
  textAlign: 'center'
}

const input={
  border: 'none',
  borderBottom: '2px solid black',
  width: '300px',
  margin: '20px'
}

const button ={
  width: '200px',
  padding: '10px',
  color: '#E1490F',
  borderRadius: '15px',
  border: '1px solid #E1490F',
  background: 'white',
  margin: '20px 0',
  boxShadow: '0px 8px 15px black'
}
class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      contents: "",
      
    };
  }

  addPost = event => {
    event.preventDefault();
    this.props.addPost(

      this.state
    
    )
      this.setState({
      title: '',
      contents: '',
     
    });
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div style={form}>
        <p>Add a new Post.</p>
        <div>
        <form style={form} onSubmit={this.addPost}>
          <input
            style={input}
            onChange={this.handleInputChange}
            placeholder="title"
            value={this.state.title}
            required='required'
            name="title"
          />
          <input
            style={input}
            onChange={this.handleInputChange}
            type='text'
            placeholder="contents"
            value={this.state.contents}
            required='required'
            name="contents"
          />
          <button style={button} type="submit">Add Post</button>
        </form>
        </div>
      </div>
    );
  }
}

export default PostForm;
