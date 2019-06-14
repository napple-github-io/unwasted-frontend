import React from 'react';
import './display/main.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { withSession } from '../containers/WithSession';
import { signup } from '../services/auth';
// import Review from './reviews/ReviewList';
// import SignUpSubmit from '../containers/auth/SignUpSubmit';
// import SignInSubmit from '../containers/auth/SignInSubmit';
// import ListingForm from './listings/ListingForm';
import Callback from '../containers/Callback';
import CreateListing from '../containers/listings/CreateListing';

export default function App() {
  return (
    <CreateListing />
    // <Router>
    //   <Switch>
    //     <Route exact path="/" component={ListingForm} />
    //     <Route exact path="/callback" component={Callback} />
    //   </Switch>
    // </Router>
  );
}
