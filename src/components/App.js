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
  signup('s4e@test.com', 'Moonfire27!', 'username', 'masd', 'MO', 'sean', 'nelson', '1234');
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={SignUpSubmit} />
        <Route exact path="/callback" component={Callback} />
      </Switch>
    </Router>
  );
}
