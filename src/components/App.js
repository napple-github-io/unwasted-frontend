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
import UserProfileDisplay from '../containers/users/UserProfileDisplay';
import MyProfileDisplay from '../containers/users/MyProfileDisplay';
import HomeDisplay from '../containers/HomeDisplay';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomeDisplay} />
        <Route exact path="/signin" component={SignInSubmit} />
        <Route exact path="/signup" component={SignUpSubmit} />
        <Route exact path="/callback" component={Callback} />
        <Route exact path="/listings" component={AllListings} />
        <Route exact path="/listings/new" component={withSession(CreateListing)} />
        <Route exact path="/myprofile" component={withSession(MyProfileDisplay)} />
        <Route path="/users/:id" component={withSession(UserProfileDisplay)} />
        <Route path="/listings/user" component={withSession(AllListings)} />
        <Route path="/listings/:listingId" component={withSession(ListingById)} />
      </Switch>
    </Router>
  );
}
