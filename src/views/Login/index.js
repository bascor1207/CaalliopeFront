import { useNavigate, useSearchParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';

import { FormError } from '../../components';

import { authConnect } from '../../redux/actions';
import { useEffect } from 'react';

export const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const loggedUser = useSelector(({ auth }) => auth.loggedUser);
  const authError = useSelector(({ auth }) => auth.authError);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (loggedUser) {
      navigate(searchParams.get('redirect') || '/', {
        replace: true
      });
    }
  }, [loggedUser, navigate, searchParams]);

  const save = ({ email, password }) => {
    dispatch(authConnect(email, password));
  };

  const back = () => {
    navigate('..');
  };

  return (
    <form className="form" onSubmit={handleSubmit(save)}>
      {authError && (
        <div className="form-error">
          {authError}
        </div>
      )}
      <div className="form-field">
        <label htmlFor="email">Email address</label>
        <input id="email" {...register('email', { required: true, email: true })} />
        <FormError error={errors.email} />
      </div>
      <div className="form-field">
        <label htmlFor="password">Password</label>
        <input id="password" type="password" {...register('password', { required: true })} />
        <FormError error={errors.password} />
    </div>
      <div className="form-commands">
        <button className="btn" type="button" onClick={back}>
          Cancel
        </button>
        <button className="btn primary" type="submit">
          Connect
        </button>
      </div>
    </form>
  );
};

export default Login;
