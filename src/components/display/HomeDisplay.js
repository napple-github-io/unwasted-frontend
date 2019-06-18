import React from 'react';
import Header from './Header';
import Footer from './Footer';
import NearbyListingThumbList from '../listings/NearbyListingThumbList';
// import MapIndex from '../mapping/MapIndex';
import PowerUserList from '../userAggregations/PowerUserList';
import { listingSeed, userSeed } from '../../assets/seedData/seedData';
import styles from './Home.css';

export default function HomeDisplay() {

  return (
    <>
    <section className={styles.hero}>
      <Header />
      <h1>End Hunger<br />In Your<br />Community</h1>
    </section>
      <NearbyListingThumbList nearbyListingList={listingSeed} />
      {/* <MapIndex /> */}
      <PowerUserList powerUserList={userSeed} />
      <Footer />
    </>
  );
}
