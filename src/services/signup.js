export const signupFetch = (email, password) => {
  return fetch(`https://${process.env.AUTH0_DOMAIN}/dbconnections/signup`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      client_id: process.env.AUTH0_CLIENT_ID,
      email: email,
      password: password,
      connection: 'Username-Password-Authentication',
      json: true
    })
  })
    .then(res => ([res.ok, res.json()]))
    .then(([ok, json]) => {
      console.log(ok, json);
      if(!ok) throw 'no signup';

      return json;
    });
};
