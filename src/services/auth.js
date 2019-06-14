import { WebAuth } from 'auth0-js';
import { request } from './request';

const auth0 = new WebAuth({
  domain: process.env.AUTH0_DOMAIN,
  clientID: process.env.AUTH0_CLIENT_ID,
  redirectUri: process.env.AUTH0_CALLBACK,
  responseType: 'token id_token',
  scope: 'openid profile',
});

export const signup = (email, password, username, street, state, firstName, lastName, zip) => {
  console.log(email, password, username, street, state, firstName, lastName, zip);
  return new Promise((resolve, reject) =>{
    auth0.signup({
      email: email,
      password: password,
      name: username,
      given_name: firstName,
      family_name: lastName,
      connection: 'Username-Password-Authentication',
      user_metadata: { role: 'user' }
    }, (error, results) => {
      if(error) return reject(error);
      resolve(results);
    });
  })
    .then(results => {
      console.log(street, state, zip)
      console.log(results);
      return request('/auth/signup', 'POST', {
        username,
        email,
        firstName,
        lastName,
        location: {
          street,
          state,
          zip
        },
        authId: results.Id
      })
        .then(res => console.log(res));
    });
};

export const signin = (email, password) => {
  return new Promise((resolve, reject) =>{
    auth0.login({
      email: email, 
      password: password,
      connection: 'Username-Password-Authentication'
    }, (error, results) => {
      if(error) return reject(error);
      resolve(results);
    });
  });
};

export const handleAuth = () => {
  return new Promise((resolve, reject) => {
    auth0.parseHash((error, results) => {
      if(results && results.accessToken && results.idToken) {
        auth0.client.userInfo(results.accessToken, (err, profile) => {
          if(err) return reject('Could not access user profile');
          resolve({
            username: profile.name,
            token: results.idToken,
            image: profile.picture,
            authId: profile.sub.replace('auth0|', '')
          });
        });
      } else {
        reject('Could not log in');
      }
    });
  });
};
