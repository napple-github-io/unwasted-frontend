import { signin, handleAuth } from '../services/auth';
import { createAction } from 'promise-middleware-redux';

export const SIGNIN_USER = 'SIGNIN_USER';
export const SIGNIN_USER_LOADING = 'SIGNIN_USER_LOADING';

export const signInUser = (email, password) => ({
  type: SIGNIN_USER,
  pendingType: SIGNIN_USER_LOADING,
  payload: signin(email, password)
});

export const [
  setSession,
  SET_SESSION,
  SET_SESSION_PENDING
] = createAction('SET_SESSION', handleAuth);
