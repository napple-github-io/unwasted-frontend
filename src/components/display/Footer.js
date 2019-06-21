import React from 'react';
import styles from './Footer.css';
import fbicongrey from '../../assets/icons/fbicongrey.svg';
import twittericongrey from '../../assets/icons/twittericongrey.svg';
import igicongrey from '../../assets/icons/igicongrey.svg';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <section>
        <a href="/" target="_blank"><img src={fbicongrey} alt="Facebook" /></a>
        <a href="/" target="_blank"><img src={twittericongrey} alt="Twitter" /></a>
        <a href="/" target="_blank"><img src={igicongrey} alt="Instagram" /></a>
      </section>

      <section>
        <ul className={styles.top}>
          <li><a href="#">Listings</a></li>
          <li><a href="#">Post</a></li>
          <li><a href="#">Users</a></li>
          <li><a href="#">Safety</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Login</a></li>
        </ul>
        <ul className={styles.bottom}>
          <li><a href="#">Legal</a></li>
          <li><a href="#">Privacy Policy</a></li>
          <li>&copy; Unwasted 2019</li>
        </ul>
      </section>
    </footer>
  );
}
