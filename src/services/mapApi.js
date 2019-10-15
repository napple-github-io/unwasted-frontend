export function getListingCoords(listingAddress) {
  // eslint-disable-next-line
    return fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${listingAddress}&key=${process.env.MAPS_API_KEY}`, {
    method: 'GET',
  })
    .then(res => ([res.ok, res.json()]))
    .then(([ok, json]) => {
      if(!ok) throw 'unable to fetch';
      return json;
    })
    .then(results => {
      const coords = {
        lat: results.results[0].geometry.location.lat,
        lng: results.results[0].geometry.location.lng
      };
      return coords;
    });
}
