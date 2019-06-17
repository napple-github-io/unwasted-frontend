import React from 'react';
import Header from './Header';
import Footer from './Footer';
import SignInForm from '../auth/SignInForm';

export default function SignInDisplay() {
  return (
    <>
      <Header />
      <SignInForm />
      <Footer />
    </>
  );
}
