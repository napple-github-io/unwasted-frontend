import React from 'react';
import Header from './Header';
import Footer from './Footer';
import NearbyListingThumbList from '../listings/NearbyListingThumbList';
import MapIndex from '../mapping/MapIndex';
import PowerUserList from '../userAggregations/PowerUserList';

export default function Home() {
  return (
    <>
      <Header />
      <NearbyListingThumbList />
      <MapIndex />
      <PowerUserList />
      <Footer />
    </>
  );
}
