import { request } from './request';

export const getUserFromApi = id => {
  return request(`/auth/users/${id}`, 'GET');
};
