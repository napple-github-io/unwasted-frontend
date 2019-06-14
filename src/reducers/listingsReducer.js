import {
  NEW_LISTING,
  NEW_LISTING_PENDING
} from '../actions/listingsActions';

const initialState = {
  loading: false,
  // DISCUSS WITH TEAM WHAT TO PASS IN
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    // case NEW_LISTING:
    // return WHAT???
    case NEW_LISTING_PENDING:
      return { ...state, loading: true };
    default:
      return state;
  }
}
