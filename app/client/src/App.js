import { useState } from 'react';
import Axios from 'axios';
import './App.css';

function App() {
  const [postname, setPostName]=useState('');
  const [main, setMain]=useState('');

  const submitpost=()=> {
    Axios.post('http://localhost:3033/api/insert', {postname: postname, main: main}).then(()=> {
      alert("successful");
    });
  }

  return (
    <div className="App">
      <h1>CRUD</h1>

      <div className="form">
        <label>Content Name</label>
        <input type="text" name="postname" onChange={(e)=> {
          setPostName(e.target.value)
        }} />

        <label>Main</label>
        <input type="text" name="main"  onChange={(e)=> {
          setMain(e.target.value)
        }} />

        <button onClick={submitpost}>Submit</button>
      </div>
    </div>
  );
}

export default App;
