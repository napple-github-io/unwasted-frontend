import React from 'react';
import './display/main.css';
import UserListingThumbList from './listings/UserListingThumbList';
import Header from './display/Header';
import Footer from './display/Footer';
import NearbyListingThumbList from './listings/NearbyListingThumbList';
import MapIndex from './mapping/MapIndex';
import PowerUserList from './users/PowerUserList';

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

  const nearbyListingList = [
    {
      image: 'https://d1bjorv296jxfn.cloudfront.net/s3fs-public/styles/product_full_size/public/products/product-packaging/00715_RFS_Strng_Mzzrll_12oz_12pk_Web.jpg?itok=q8yErCpW',
      name: 'Cheese',
      location: 'NE Portland',
      description: 'Got that cheese'
    }, 
    {
      image: 'https://d1bjorv296jxfn.cloudfront.net/s3fs-public/styles/product_full_size/public/products/product-packaging/00715_RFS_Strng_Mzzrll_12oz_12pk_Web.jpg?itok=q8yErCpW',
      name: 'Cheese',
      location: 'NE Portland',
      description: 'Got that cheese'
    }, 
    {
      image: 'https://d1bjorv296jxfn.cloudfront.net/s3fs-public/styles/product_full_size/public/products/product-packaging/00715_RFS_Strng_Mzzrll_12oz_12pk_Web.jpg?itok=q8yErCpW',
      name: 'Cheese',
      location: 'NE Portland',
      description: 'Got that cheese'
    } 
  ];

  const powerUserList = [
    {
      image: 'https://i.kinja-img.com/gawker-media/image/upload/s--wW8Qsn6M--/c_fit,f_auto,fl_progressive,q_80,w_320/18j05qgz6tfxjjpg.jpg',
      name: 'Trish',
      listingCount: '311',
      description: 'Salad tells the best jokes'
    },
    {
      image: 'https://i.kinja-img.com/gawker-media/image/upload/s--wW8Qsn6M--/c_fit,f_auto,fl_progressive,q_80,w_320/18j05qgz6tfxjjpg.jpg',
      name: 'Trish',
      listingCount: '311',
      description: 'Salad tells the best jokes'
    },
    {
      image: 'https://i.kinja-img.com/gawker-media/image/upload/s--wW8Qsn6M--/c_fit,f_auto,fl_progressive,q_80,w_320/18j05qgz6tfxjjpg.jpg',
      name: 'Trish',
      listingCount: '311',
      description: 'Salad tells the best jokes'
    }
  ];

  return (
    <>
      <Header />
      <UserListingThumbList userListingList={userListingList} />
      <NearbyListingThumbList nearbyListingList={nearbyListingList} />
      <MapIndex mapIndex='MAPGOESHERE' />
      <PowerUserList powerUserList={powerUserList} />
      <Footer />
    </>
  );
}
