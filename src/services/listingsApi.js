import { request } from './request';

export const postListingToApi = (title, description, imageUrl, category, street, zip, state, dietary, expiration, user) => {
  return request('/listings/new', 'POST', {
    title,
    description,
    imageUrl,
    category,
    location:{
      street,
      zip,
      state,
    },
    dietary,
    expiration,
    user
  });
};

export const getAllListingsFromApi = () => {
  return request('/listings', 'GET');
};

export const getSingleListingFromApi = listingId => {
  console.log('attempting fetch');
  return request(`/listings/${listingId}`, 'GET');
};
