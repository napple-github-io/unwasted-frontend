import { request } from './request';


export const postListingToApi = (title, description, imageUrl, category, street, zip, state, dietary, expiration, user) => {
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
    user
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
