import { post } from './request';

export const createListing = listing => post('/api/v1/listings', listing);
