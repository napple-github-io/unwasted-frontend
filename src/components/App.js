import React from 'react';
import './display/main.css';
import Profile from './profile/Profile';

export default function App() {
  const profile = {
    image: 'https://media1.tenor.com/images/97d797aab25574d6dc1b686c1df55345/tenor.gif',
    userName: 'Ramen420',
    name: 'Justin T.',
    address: {
      street: '2428 NE MLK Ave.',
      state: 'OR',
      zip: '42069'
    },
    bio: 'Hihihihihi'
  };

  return (
    <Profile profile={profile} />
  );
}
