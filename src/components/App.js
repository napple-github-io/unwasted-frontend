import React from 'react';
import './display/main.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { withSession } from '../containers/WithSession';
import { signup } from '../services/auth';
// import Review from './reviews/ReviewList';
import SignUpSubmit from '../containers/auth/SignUpSubmit';
import SignInSubmit from '../containers/auth/SignInSubmit';
import Callback from '../containers/Callback';

export default function App() {
  signup('711@test.com', 'Moonfire27', 'dude', '1234 N St', '97211');
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={SignInSubmit} />
        <Route exact path="/callback" component={Callback} />
        <Route exact path="/signup" component={withSession(SignUpSubmit)} />
      </Switch>
    </Router>
  );
}
