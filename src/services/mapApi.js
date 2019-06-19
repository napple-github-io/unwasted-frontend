export function getListingMap(userLat, userLong, listingAddresses) {
  const latLongUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${userLat},${userLong}&markers=color:green|${userLat},${userLong}&markers=color:blue|${listingAddresses}&size=400x400&key=${process.env.MAPS_API_KEY}`;
  return latLongUrl;
}
