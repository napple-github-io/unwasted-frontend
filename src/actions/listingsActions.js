import { createAction } from 'promise-middleware-redux';
import { createListing } from '../services/listingsApi';

export const [
  newListing,
  NEW_LISTING,
  NEW_LISTING_PENDING
] = createAction('NEW_LISTING', createListing);
