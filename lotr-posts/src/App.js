import React, { Component } from 'react';
import axios from 'axios'
import { Route } from 'react-router-dom'
import './App.css';
import PostForm from './Components/PostForm'
import Posts from './Components/Posts';
import UpdateForm from './Components/UpdateForm'
import Header from './Components/Header'

const app = {
  fontFamily: 'Spectral, serif'
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
  }

  componentDidMount(){
    axios
    .get(`http://localhost:8000/api/posts`)
    .then (response => {
      this.setState(() => ({ posts: response.data }));
    })
    .catch(error => {
      console.error(error);
    })
  }

  addPost = (post) => {
    axios
      .post(`http://localhost:8000/api/posts`, post )
      .then( response => {
        console.log(response)
        alert('Post Added')
        this.setState({ posts: response.data })
        
      })
      .catch(error => console.log(error))
  }

  deletePost = id => {
    axios.delete(`http://localhost:8000/api/posts/${id}`)
      .then(response => {
        this.setState({posts:response.data})
      })
      .catch(err => console.log(err));
  }

  updatePost = (state, id) => {
    axios
    .put(`http://localhost:8000/posts/${id}`, state)
      .then(response => {
        this.setState({
          posts: response.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <div style={app}>
      <Header/>
      <Route exact path="/" render={ (props) => {
          return(<Posts {...props} posts={this.state.posts} deletePost={this.deletePost} />)
        }} />
        <Route path="/PostForm" render={ (props) => {
          return(<PostForm {...props} addPost={this.addPost} posts={this.state.posts} />)
        }} />

          <Route path="/UpdateForm" render={ (props) => {
          return(<UpdateForm {...props} updatePost={this.updatePost} posts={this.state.posts} />)
        }} />
         
      </div>
    );
  }
}

export default App;