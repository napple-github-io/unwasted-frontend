import React from 'react';
import styles from './Header.css';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className={styles.header}>
      {/* <a href="/"><img src="./src/assets/logos/logogrey.svg" alt="Unwasted" /></a> */}
      <a href="/"><aside className={styles.headerLogo}></aside></a>
      <nav>
        <ul>
          <a href="#/myprofile"><li>Listings</li></a>
          <Link to={'/myprofile'}><li>Post</li></Link>
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
