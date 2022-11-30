import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

export const withAuth = (Component) => (
  (props) => {
    const loggedUser = useSelector(({ auth }) => auth.loggedUser);
    const location = useLocation();

    return loggedUser ? (
      <Component {...props} />
    ) : (
      <Navigate to={`/login?redirect=${location.pathname}`} replace />
    );
  }
);
