import { getToken } from '../selectors/userAuthSelectors';
import store from '../store.js';
export const request = (path, method, body) => {
  // eslint-disable-next-line
  return fetch(`${process.env.API_URL}${path}`, {
    method: method,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${getToken(store.getState())}`
    },
    body: body ? JSON.stringify(body) : null
  })//better error message?
    .then(res => ([res.ok, res.json()]))
    .then(([ok, json]) => {
      if(!ok) throw `unable to ${path}`;
      
      return json;
    });
};

export const post = (path, body) => request(path, 'POST', body);
export const get = path => request(path, 'GET');
export const put = (path, body) => request(path, 'PUT', body);
export const del = path => request(path, 'DELETE');

