import { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import Loading from './Loading';

const PrivateRoute = ({ path, component, redirectTo = '/login' }) => {
  const { user, authIsDone } = useContext(UserContext);
  if (!authIsDone) return <Loading />;
  if (authIsDone) {
    return user ? (
      <Route path={path} component={component} />
    ) : (
      <Redirect to={redirectTo} />
    );
  }
};

export default PrivateRoute;
