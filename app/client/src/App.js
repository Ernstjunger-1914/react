import { React } from 'react';
import { Route, Link, Router, Switch, BrowserRouter } from 'react-router-dom';
import './App.css';
import Login from './Login';
import Register from './Register';
import Todo from './Todo';


function App() {

  return (
    <div className="App">
      <nav className="header">
      </nav>

      <BrowserRouter>
        <Switch>
          <Route exact path='/todo' component={Todo} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/register' component={Register} /> 
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;