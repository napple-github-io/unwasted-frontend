import React from 'react';
import './display/main.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { withSession } from '../containers/WithSession';
import { signup } from '../services/auth';
// import Review from './reviews/ReviewList';
import SignUpSubmit from '../containers/auth/SignUpSubmit';
import SignInSubmit from '../containers/auth/SignInSubmit';
import Callback from '../containers/Callback';
import CreateListing from '../containers/listings/CreateListing';
import AllListings from '../containers/listings/AllListings';
import ListingById from '../containers/listings/ListingById';
import HomeDisplay from './display/HomeDisplay';
import UserProfileDisplay from '../containers/users/UserProfileDisplay';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={AllListings} />
        <Route exact path="/signup" component={SignUpSubmit} />
        <Route exact path="/listings/new" component={CreateListing} />
        <Route exact path="/callback" component={Callback} />
        <Route exact path="/listings" component={AllListings} />
        <Route path="/users/:id" component={UserProfileDisplay} />
        <Route path="/listings/:listingId" component={ListingById} />
      </Switch>
    </Router>
  );
}
