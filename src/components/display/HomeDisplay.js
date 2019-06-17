import React from 'react';
import Header from './Header';
import Footer from './Footer';
import NearbyListingThumbList from '../listings/NearbyListingThumbList';
// import MapIndex from '../mapping/MapIndex';
import PowerUserList from '../userAggregations/PowerUserList';
import { listingSeed, userSeed } from '../../assets/seedData/seedData';

export default function HomeDisplay() {
  return (
    <>
      <Header />
      <NearbyListingThumbList nearbyListingList={listingSeed} />
      {/* <MapIndex /> */}
      <PowerUserList powerUserList={userSeed} />
      <Footer />
    </>
  );
}
