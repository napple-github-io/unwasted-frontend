import React from 'react';
import './display/main.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SignUpSubmit from '../containers/auth/SignUpSubmit';
import SignInSubmit from '../containers/auth/SignInSubmit';
import Callback from '../containers/Callback';
import CreateListing from '../containers/listings/CreateListing';
import UserProfile from './profile/UserProfile';
import ListingDetails from './listings/ListingDetails';
import { listingDetails } from '../assets/seedData/seedData';
import ContactForm from './contact/ContactForm';

export default function App() {
  return (
    <ContactForm user={listingDetails} />
  );
}
