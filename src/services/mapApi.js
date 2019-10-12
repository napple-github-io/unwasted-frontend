const SIZE = '980x980';
import { request } from './request';

export function getListingMap(userLat, userLong, listingAddresses) {
  const latLongUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${userLat},${userLong}&key=${process.env.MAPS_API_KEY}&size=${SIZE}&markers=color:green|${userLat},${userLong}&markers=color:blue|${listingAddresses}`;
  return latLongUrl;
}

export function getListingMapWithoutUser(listing) {
  const latLongUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${listing}&key=${process.env.MAPS_API_KEY}&size=${SIZE}&markers=color:blue|${listing}`;
  return latLongUrl;
}

export function getListingCoords(listingAddress) {
  // eslint-disable-next-line
    return fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${listingAddress}&key=${process.env.MAPS_API_KEY}`, {
    method: 'GET',
  })
    .then(res => ([res.ok, res.json()]))
    .then(([ok, json]) => {
      if(!ok) throw 'unable to fetch';
      // const coords = {
      //   lat: json.results[0].geometry.location.lat,
      //   lng: json.results[0].geometry.location.lng
      // };
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
