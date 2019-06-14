import { WebAuth } from 'auth0-js';
import { request } from './request';

const auth0 = new WebAuth({
  domain: process.env.AUTH0_DOMAIN,
  clientID: process.env.AUTH0_CLIENT_ID,
  redirectUri: process.env.AUTH0_CALLBACK,
  responseType: 'token id_token',
  scope: 'openid profile',
});

export const signup = (email, password, username, address, zip) => {
  return new Promise((resolve, reject) =>{
    auth0.signup({
      email: email,
      password: password,
      name: username,
      connection: 'Username-Password-Authentication',
      user_metadata: { role: 'user' }
    }, (error, results) => {
      if(error) return reject(error);
      console.log(results);
      resolve(results);
    });
  })
    .then(results => {
      console.log(results);
      return request('/auth/signup', 'POST', {
        username:results.username,
        email,
        location: {
          address,
          zip
        },
        authId: results._id
      })
        .then(res => console.log(res));
    });
};

export const signin = (email, password) => {
  console.log('entered signin function');
  return new Promise((resolve, reject) =>{
    auth0.login({
      email: email, 
      password: password,
      connection: 'Username-Password-Authentication'
    }, (error, results) => {
      console.log('made it to callback');
      console.log(results, error);
      if(error) return reject(error);
      console.log('signin results', results);
      resolve(results);
    });
  });
};

export const handleAuth = () => {
  return new Promise((resolve, reject) => {
    auth0.parseHash((error, results) => {
      console.log('res', results);
      if(results && results.accessToken && results.idToken) {
        auth0.client.userInfo(results.accessToken, (err, profile) => {
          console.log('prof', profile);
          if(err) return reject('Could not access user profile');
          resolve({
            username: profile.name,
            token: results.idToken,
            image: profile.picture
          });
        });
      } else {
        reject('Could not log in');
      }
    });
  });
};
