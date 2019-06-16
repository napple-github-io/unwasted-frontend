import React from 'react';
import Header from './Header';
import Footer from './Footer';
import YourProfileDetails from '../profile/YourProfileDetails';
import ReviewList from '../reviews/ReviewList';
import NearbyListingThumbList from '../listings/NearbyListingThumbList';
import UserListingThumbList from '../listings/UserListingThumbList';
import { listingSeed, userSeedObj, reviewSeed } from '../../assets/seedData/seedData';

export default function YourProfileDisplay() {
  return (
    <>
      <Header />
      <UserListingThumbList userListingList={listingSeed} />
      <NearbyListingThumbList nearbyListingList={listingSeed} />
      <YourProfileDetails profile={userSeedObj} />
      <ReviewList reviewList={reviewSeed} />
      <Footer />
    </>
  );
}
