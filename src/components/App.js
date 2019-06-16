import React from 'react';
import './display/main.css';
import ListingDetails from './listings/ListingDetails';
import { listingSeedObj } from '../assets/seedData/seedData';
// import SignInDisplay from './display/SignInDisplay';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import Home from './display/Home';
// import YourProfile from './display/YourProfile';
// import UserProfile from './display/UserProfile';

export default function App() {
  return (
    <ListingDetails listingDetails={listingSeedObj}/>
  );
}
