import { useEffect, useState } from 'react';
import { Route, Link, Router, Switch } from 'react-router-dom';
import Axios from 'axios';
import './App.css';
import Login from './Login';
import Register from './Register';

function App() {

  const [postname, setPostName]=useState('');
  const [main, setMain]=useState('');
  const [postList, setPostList]=useState([]);
  const [newMain, setNewMain]=useState('');
  Axios.defaults.withCredentials = true;

  useEffect(()=> {
    Axios.get('http://localhost:3033/api/get').then((Response)=> {
      setPostList(Response.data);
    });
  }, []);

  const submitpost=()=> {
    if(postname==='') {
      alert('제목을 입력해주시오.');

      return false;
    } else if(main==='') {
      alert("내용을 입력해주시오.");

      return false;
    }
    
    Axios.post('http://localhost:3033/api/insert', {postname: postname, main: main}).then(()=> {
        setPostList([...postList, {postname: postname, main: main},
      ]);
    });
  }

  const deletePost=(post)=> {
    Axios.delete(`http://localhost:3033/api/delete/${post}`);
  }

  const updatePost=(post)=> {
    Axios.patch('http://localhost:3033/api/update', {
      postname: post,
      main: newMain,
    }).then(() => {
      setNewMain('')
    });
  }

  return (
    <div className="App">
      <nav className="header"></nav>

      <div className="form">
        <label>Content Name</label>
        <input type="text" name="postname" onChange={(e)=> {
          setPostName(e.target.value)
        }} />

        <label>Main</label>
        <input type="text" name="main" onChange={(e)=> {
          setMain(e.target.value)
        }} />

        <button onClick={submitpost}>Submit</button>

        {postList.map((val)=> {
          return (
            <div className="card">
              <h1>{val.postname}</h1>
              <p>{val.main}</p>
              <button onClick={()=> {deletePost(val.postname)}}>Delete</button>
              <input type="text" id="updateinput" onChange={(e)=> {
                setNewMain(e.target.value)
              }} />
              <button onClick={()=> {updatePost(val.postname)}}>Update</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;