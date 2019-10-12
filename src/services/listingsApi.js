import { request } from './request';
import { getToken } from '../selectors/userAuthSelectors';
import store from '../store.js';
import { getListingCoords } from './mapApi';

export const postListingToApi = (title, description, imageUrl, category, street, zip, state, dietary, expiration, user) => {
  return getListingCoords('5734 NE 27th')
    .then(res => {
      const coords = res;
      return coords;
    })
    .then(coords => {
      console.log(coords);
      return request('/listings/', 'POST', {
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
        user,
        coords
      });
    });

};

export const getAllListingsFromApi = () => {
  return request('/listings', 'GET');
};

export const getAllListingsFromApiWithDistance = origin => {
  return request(`/listings/distance?origin=${origin}`, 'GET');
};

export const getSingleListingFromApi = listingId => {
  return request(`/listings/${listingId}`, 'GET');
};

export const getListingsByUser = userId => {
  return request(`/listings/user?id=${userId}`, 'GET');
};

export const deleteListingFromApi = listingId => {
  return request(`/listings/${listingId}`, 'DELETE');
};

export const searchListings = (dietary, category, distance, origin) => {
  let dietarySearchString = '';
  let categorySearch = '';
  const objectKeys = Object.keys(dietary);

  for(let i = 0; i < objectKeys.length; i++) {
    if(dietary[objectKeys[i]] === true) {
      dietarySearchString += `${objectKeys[i]}=true&`;
    }
  }

  if(category) {
    categorySearch = `category=${category}&`;
  } else {categorySearch = '';}

  return request(`/listings/search?origin=${origin}&${dietarySearchString}${categorySearch}distance=${distance}`, 'GET');
};

export const postImageToApi = file => {
  const form = new FormData();
  form.append('file', file);
  return fetch(`${process.env.API_URL}/listings/upload`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${getToken(store.getState())}`
    },
    body: form
  })
    .then(returned => returned.json());
};

