import { post } from './request';

export const createListingApi = listing => post('/api/v1/listings', listing);
