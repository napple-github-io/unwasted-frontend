// import React from 'react';
import './display/main.css';
// import Review from './reviews/ReviewList';
import { signupFetch } from '../services/signup';

export default function App() {
  return signupFetch('smnelson@gmail.com', '1234');

  // return <h1>hi</h1>;
}
