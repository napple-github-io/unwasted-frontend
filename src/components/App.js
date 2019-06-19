import React from 'react';
import ListingDetails from './listings/ListingDetails'; 
import ContactForm from './contact/ContactForm';
import { listingSeedObj } from '../assets/seedData/seedData';

export default function App() {
  return (
    <>
      <ListingDetails listing={listingSeedObj} />
      <ContactForm receivingUser={listingSeedObj.user} />
    </>
  );
}
