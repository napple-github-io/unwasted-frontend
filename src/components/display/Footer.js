import React from 'react';

export default function Footer() {
  return (
    <footer>
      <section>
        <a href="/" target="_blank"><img src="./src/assets/icons/fbicongrey.svg" alt="Facebook" /></a>
        <a href="/" target="_blank"><img src="./src/assets/icons/twittericongrey.svg" alt="Twitter" /></a>
        <a href="/" target="_blank"><img src="./src/assets/icons/igicongrey.svg" alt="Instagram" /></a>
      </section>

      <section>
        <ul>
          <li><a href="#">Listings</a></li>
          <li><a href="#">Post</a></li>
          <li><a href="#">Users</a></li>
          <li><a href="#">Safety</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Login</a></li>
        </ul>
        <ul>
          <li><a href="#">Legal</a></li>
          <li><a href="#">Privacy Policy</a></li>
          <li>&copy; Unwasted 2019</li>
        </ul>
      </section>
    </footer>
  );
}
