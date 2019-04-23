import React, { Component } from 'react';


const form ={
  display: 'flex',
  flexDirection: 'column',
  alignItems:'center'
}

const input={
  border: 'none',
  borderBottom: '2px solid #00A4D6',
  width: '300px',
  margin: '20px'
}

const button ={
  width: '200px',
  padding: '10px',
  color: '#00A4D6',
  borderRadius: '15px',
  border: '1px solid #00A4D6',
  background: 'white',
  margin: '20px 0',
  boxShadow: '0px 8px 15px black'
}
class UpdateForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
        title: '',
        content: '',
    };
  }

  

  render() {
    return (
      <div style={form} >
       
      </div>
    );
  }
}

export default UpdateForm;