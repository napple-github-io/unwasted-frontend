import React from 'react';
import UserListingThumb from './listings/UserListingThumb';

export default function App() {
  const userListing = {
    image: 'https://cdn.shopify.com/s/files/1/0150/0232/products/Pearl_Valley_Swiss_Slices_36762caf-0757-45d2-91f0-424bcacc9892_large.jpg?v=1534871055',
    name: 'Cheese',
    location: 'NE Portland',
    description: 'Got that cheese'
  };

  return (
    <UserListingThumb userListing={userListing} />
  );
}
