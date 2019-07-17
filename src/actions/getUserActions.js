import { signin, handleAuthSession } from '../services/auth';

export const SIGNIN_USER = 'SIGNIN_USER';
export const SIGNIN_USER_LOADING = 'SIGNIN_USER_LOADING';

export const signInUser = (email, password) => ({
  type: SIGNIN_USER,
  pendingType: SIGNIN_USER_LOADING,
  payload: signin(email, password)
});

export const SET_SESSION = 'SET_SESSION';
export const SET_SESSION_PENDING = 'SET_SESSION_PENDING';

export const setSession = () => ({
  type: SET_SESSION,
  pendingType: SET_SESSION_PENDING,
  payload: handleAuthSession()
});

export const END_SESSION = 'END_SESSION';
export const END_SESSION_PENDING = 'END_SESSION_PENDING';

export const endSession = () => ({
  type: END_SESSION,
  pendingType: END_SESSION_PENDING,
  payload: {}
});
