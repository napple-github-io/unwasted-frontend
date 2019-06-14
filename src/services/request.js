export const request = (path, method, body) => {
  // eslint-disable-next-line
  return fetch(`${process.env.API_URL}${path}`, {
    method,
    headers: { 'Content-Type': 'application/json' },
    body: body ? JSON.stringify(body) : null
  })
    .then(res => ([res.ok, res.json()]))
    .then(([ok, json]) => {
      if(!ok) throw `unable to ${path}`;
      
      return json;
    });
};

export const post = (path, body) => request(path, 'POST', body);
export const ge = path => request(path, 'GET');
export const put = (path, body) => request(path, 'PUT', body);
export const del = path => request(path, 'DELETE');

