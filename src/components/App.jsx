import '../scss/App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Nav from './Nav';
import Dashboard from './Dashboard';
import NotFound from './NotFound';
import Homepage from './Homepage';
import Login from './Login';
import Signup from './Signup';
import Profile from './Profile';

const App = (props) => {
  return (
    <div className='app'>
      <Router>
        <Nav></Nav>
        <div className='main'>
          <Switch>
            <Route exact path='/dashboard' component={Dashboard} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/signup' component={Signup} />
            <Route exact path='/profile' component={Profile} />
            <Route exact path='' component={Homepage} />
            <Route path='*' component={NotFound} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
