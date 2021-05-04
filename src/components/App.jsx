import '../scss/App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Nav from './Nav';
import Dashboard from './Dashboard';
import NotFound from './NotFound';
import Homepage from './Homepage';
import Login from './Login';
import Signup from './Signup';
import Profile from './Profile';
import PrivateRoute from './PrivateRoute';
import Cart from './Cart';

const App = (props) => {
  return (
    <div className='app'>
      <Router>
        <Nav></Nav>
        <div className='main'>
          <Switch>
            <PrivateRoute exact path='/dashboard' component={Dashboard} />
            <PrivateRoute exact path='/profile' component={Profile} />
            <PrivateRoute exact path='/cart' component={Cart} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/signup' component={Signup} />
            <Route exact path='' component={Homepage} />
            <Route path='*' component={NotFound} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
