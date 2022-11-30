import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { authDisconnect } from '../redux/actions';

import styles from './NavBarAuth.module.scss';

export const NavBarAuth = () => {
  const loggedUser = useSelector(({ auth }) => auth.loggedUser);
  const dispatch = useDispatch();

  const disconnect = () => {
    dispatch(authDisconnect());
  };

  return (
    <div className={styles.auth}>
      {loggedUser ? (
        <>
          <div>
            Hello {loggedUser.name} !
          </div>
          <button className="btn" onClick={() => disconnect()}>
            Logout
          </button>
        </>
      ) : (
        <NavLink to="/login">Login</NavLink>
      )}
    </div>
  );
};
