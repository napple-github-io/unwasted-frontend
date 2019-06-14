import { SIGNIN_USER, SIGNIN_USER_LOADING, SET_SESSION } from '../actions/getUserActions';

const initialState = {
  username: '',
  token: '',
  imageUrl: ''
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case SIGNIN_USER:
      return { ...state, user: action.payload };
    case SIGNIN_USER_LOADING:
      return { ...state, loading: true };
    case SET_SESSION:
      return action.payload;
    default:
      return state;
  }


}
