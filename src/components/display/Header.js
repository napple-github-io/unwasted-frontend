import React from 'react';
import styles from './Header.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <a href="/"><img src="./src/assets/logos/logogrey.svg" alt="Unwasted" /></a>
      <nav>
        <ul>
          <a href="#"><li>Listings</li></a>
          <a href="#"><li>Post</li></a>
          <a href="#"><li>Users</li></a>
          <a href="#"><li>Safety</li></a>
          <a href="#"><li>About</li></a>
          <a href="#"><li>Login</li></a>
          <a href="#"><li>Search</li></a>
        </ul>
      </nav>
    </header>
  );
}
