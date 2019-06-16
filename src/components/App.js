import React from 'react';
import './display/main.css';
import ContactForm from './contact/ContactForm';
import { userSeedObj } from '../assets/seedData/seedData';

// import AllListingsList from './listings/AllListingsList';
// import ListingDetails from './listings/ListingDetails';
// import SignInDisplay from './display/SignInDisplay';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import Home from './display/Home';
// import YourProfile from './display/YourProfile';
// import UserProfile from './display/UserProfile';

export default function App() {
  return (
    <ContactForm user={userSeedObj} />
  );
}
