import { request } from './request';

export const postListingToApi = (title, description, imageUrl, category, street, zip, state, dietary, expiration, user) => {
  return request('/listings', 'POST', {
    title,
    description,
    imageUrl,
    category,
    street,
    zip,
    state,
    dietary,
    expiration
  })
    .then(res => console.log(res)); 
};
