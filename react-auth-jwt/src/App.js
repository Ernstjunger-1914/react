import {Switch, Route} from 'react-router-dom';
import Home from './Components/Home';
import Signup from './Components/Signup';
import Login from './Components/Login';
import Logout from './Components/Logout';
import "./App.css";

function App() {
    return (
        <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/signup' component={Signup} />
            <Route path='/login' component={Login} />
            <Route path='/logout' component={Logout} />
        </Switch>
    );
}

export default App;