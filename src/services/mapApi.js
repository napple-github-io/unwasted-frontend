const SIZE = '980x980';

export function getListingMap(userLat, userLong, listingAddresses) {
  const latLongUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${userLat},${userLong}&key=${process.env.MAPS_API_KEY}&size=${SIZE}&markers=color:green|${userLat},${userLong}&markers=color:blue|${listingAddresses}`;
  return latLongUrl;
}

export function getListingMapWithoutUser(listing) {
  const latLongUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${listing}&key=${process.env.MAPS_API_KEY}&size=${SIZE}&markers=color:blue|${listing}`;
  return latLongUrl;
}
