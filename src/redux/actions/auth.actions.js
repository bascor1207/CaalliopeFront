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
    authService.login(email, password)
      .then((response) => {
        const data = response.data
        dispatch(authConnectSuccess({ ...data.user, token: data.authorisation.token }))
      })
      .catch(() => dispatch(authConnectError("Le mot de passe ou l'email n'est pas valide.")))
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

export const authRegister = (firstname, lastname, email, password) => (
  (dispatch, _getState, { authService }) => (
    authService.register(firstname, lastname, email, password)
      .then((response) => {
        const data = response.data
        dispatch(authRegisterSuccess({ ...data.user, token: data.authorisation.token }))
      })
      .catch(() => dispatch(authRegisterError("L'email ou le mot de passe n'est pas au bon format (mot de passe min: 8 caractères)")))
  )
);

export const authRegisterSuccess = (user) => (
  (dispatch, _getState, { storageService, STORAGE_KEY }) => {
    storageService.setObject(STORAGE_KEY.USER, user);
    dispatch({
      type: actions.AUTH_REGISTER_SUCCESS,
      payload: { user }
    });
  }
);

export const authRegisterError = (error) => ({
  type: actions.AUTH_REGISTER_ERROR,
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
