import { actions } from './actions';

export const authInitialize = () => (
  (dispatch, _getState, { storageService, STORAGE_KEY }) => {
    const user = storageService.getObject(STORAGE_KEY.USER);
    dispatch({
      type: actions.AUTH_INITIALIZE,
      payload: { user }
    });
  }
)
export const authConnect = (email, password) => (
  (dispatch, _getState, { authService }) => (
    authService.connect(email, password)
      .then((user) => dispatch(authConnectSuccess(user)))
      .catch((err) => dispatch(authConnectError(err.message)))
  )
);

export const authConnectSuccess = (user) => (
  (dispatch, _getState, { storageService, STORAGE_KEY }) => {
    storageService.setObject(STORAGE_KEY.USER, user);
    dispatch({
      type: actions.AUTH_CONNECT_SUCCESS,
      payload: { user }
    });
  }
);

export const authConnectError = (error) => ({
  type: actions.AUTH_CONNECT_ERROR,
  payload: { error }
});

export const authDisconnect = () => (
  (dispatch, _getState, { storageService, STORAGE_KEY }) => {
    storageService.remove(STORAGE_KEY.USER);
    dispatch({
      type: actions.AUTH_DISCONNECT
    });
  }
);
