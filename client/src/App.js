import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Dashboard from './Dashboard/Dashboard';
import Preferences from './Preferences/Preferences';
import Login from './Login/Login';
import useTokens from './useToken';

function App() {
  const {token, setToken}=useTokens();

  if(!token) {
    return <Login setToken={setToken} />
  }

  return (
    <div className="wrapper">
      <h1>Application</h1>
      <BrowserRouter>
        <Switch>
          <Route exact path='/dashboard'>
            <Dashboard />
          </Route>
          <Route exact path='/login'>
            <Login />
          </Route>
          <Route exact path='/preferences'>
            <Preferences />
          </Route>
          <Route exact path='/logout'>
            
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
