import { combineReducers } from 'redux';
import user from './userReducer';
import listings from './listingsReducer';

export default combineReducers({
  user,
  listings
});
