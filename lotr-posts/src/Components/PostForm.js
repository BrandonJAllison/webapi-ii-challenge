import React, { Component } from 'react';
import './Components.css'


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
 border: 'none',
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
      <div className="box">
        <p>Add your favorite Lord of The Rings Quote....</p>
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
          <button style={button} type="submit"><i class="fas fa-hat-wizard"></i>Submit</button>
        </form>
        </div>
      </div>
    );
  }
}

export default PostForm;
