import { request } from './request';

export const getUserFromApi = id => {
  return request(`/auth/users/${id}`, 'GET');
};

export const getPowerUsersFromApi = () => {
  return request('/auth/power', 'GET');
};
