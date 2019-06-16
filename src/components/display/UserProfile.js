import React from 'react';
import Header from './Header';
import Footer from './Footer';
import ReviewList from '../reviews/ReviewList';
import UserListingThumbList from '../listings/UserListingThumbList';
import UserProfileDetails from '../profile/UserProfileDetails';
import { listingSeed, userSeedObj, reviewSeed } from '../../assets/seedData/seedData';

export default function YourProfile() {
  return (
    <>
      <Header />
      <UserProfileDetails userProfileDetails={userSeedObj} />
      <ReviewList reviewList={reviewSeed} />
      <UserListingThumbList userListingList={listingSeed} />
      <Footer />
    </>
  );
}

