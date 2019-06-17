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
  })
    .then(res => console.log(res)); 
};

export const getAllListingsFromApi = () => {
  return request('/listings', 'GET');
};

