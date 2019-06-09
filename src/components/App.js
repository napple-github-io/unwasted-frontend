import React from 'react';
import UserListingThumbList from './listings/UserListingThumbList';
import Header from './display/Header';

export default function App() {
  const userListingList = [
    {
      image: 'https://cdn.shopify.com/s/files/1/0150/0232/products/Pearl_Valley_Swiss_Slices_36762caf-0757-45d2-91f0-424bcacc9892_large.jpg?v=1534871055',
      name: 'Cheese',
      location: 'NE Portland',
      description: 'Got that cheese'
    }, 
    {
      image: 'https://cdn.shopify.com/s/files/1/0150/0232/products/Pearl_Valley_Swiss_Slices_36762caf-0757-45d2-91f0-424bcacc9892_large.jpg?v=1534871055',
      name: 'Cheese',
      location: 'NE Portland',
      description: 'Got that cheese'
    }, 
    {
      image: 'https://cdn.shopify.com/s/files/1/0150/0232/products/Pearl_Valley_Swiss_Slices_36762caf-0757-45d2-91f0-424bcacc9892_large.jpg?v=1534871055',
      name: 'Cheese',
      location: 'NE Portland',
      description: 'Got that cheese'
    } 
  ];

  return (
    <>
      <Header />
      <UserListingThumbList userListingList={userListingList} />
    </>
  );
}
