import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Nav = () => {
  const { user, cart, cartCounter } = useContext(UserContext);
  console.log('NAAV NAV NAV RERENDERING', cart.records.length);
  return (
    <nav>
      <ul>
        <div className='logo'>
          <NavLink exact to={user ? '/dashboard' : '/'}>
            <p>RECORD STORE</p>
          </NavLink>
        </div>
        <div className='items'>
          {!user && (
            <>
              <NavLink exact activeClassName='selected' to='/login'>
                <p>Login</p>
              </NavLink>
              <NavLink
                exact
                to='/signup'
                activeClassName='selected'
                className='button-bg'
              >
                <p>Sign Up</p>
              </NavLink>
            </>
          )}
          {user && (
            <>
              <NavLink activeClassName='selected' exact to='/cart'>
                {cartCounter && (
                  <div className='cnt'>
                    <p>{cartCounter}</p>
                  </div>
                )}
                <FontAwesomeIcon icon={faShoppingCart} />
              </NavLink>
              <NavLink className='avatar' activeClassName='selected' exact to='/profile'>
                <img src={user.avatar}></img>
              </NavLink>
            </>
          )}
        </div>
      </ul>
    </nav>
  );
};

export default Nav;
