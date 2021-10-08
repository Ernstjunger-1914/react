import React, { Component } from 'react';
import './App.css';

export default class App extends Component {
  state = {
    id : "",
  }

  handleChange =(e)=>{
    this.setState({
      [e.target.name] : e.target.value,
    });
  }

  submitId=()=> {
    const post={
      getid: this.state.id,
    };

    fetch('http://127.0.0.1:3003/ssd', {
      method: "post",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(post)
    }).then((res)=>res.json()).then((json)=> {
      this.setState({
        id: json.text,
      })
    })
  };

  render() {
    return (
      <div>
        <input onChange={this.handleChange} name ="id"/>
        <button onClick={this.submitId}>Submit</button>
        <h1>{this.state.id}</h1>
      </div>
    )
  }
}
