export const request = (path, method, body) => {
  // eslint-disable-next-line
  return fetch(`http://localhost:8889/api/v1${path}`, {
    method: method,
    headers: {
      'Content-Type': 'application/json',
    },
    body: body ? JSON.stringify(body) : null
  })
    .then(res => ([res.ok, res.json()]))
    .then(([ok, json]) => {
      if(!ok) throw `unable to ${path}`;
      
      return json;
    });
};
