import { React } from 'react';
import { Route, Link, Switch, BrowserRouter } from 'react-router-dom';
import './App.css';
import Login from './Login';
import Register from './Register';
import Todo from './Todo';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <nav className="header">
        <Link to='/todo' className="menu"><button>Todo</button></Link>
        <Link to='/login' className="menu"><button>로그인</button></Link>
        <Link to='/register' className="menu"><button>회원가입</button></Link>
      </nav>
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