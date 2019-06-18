import React from 'react';
import PropTypes from 'prop-types';
import styles from './Header.css';
import { Link } from 'react-router-dom';

function Header({ user }) {
    
  return (
    <header className={styles.header}>
      <a href="/"><aside className={styles.headerLogo}></aside></a>
      <nav>
        <ul>
          <Link to={'/listings'}><li>Listings</li></Link>
          <Link to={'/listings/new'}><li>Post</li></Link>
          {user.token && <Link to={`/listings/user?id=${user.userMongooseId}`}><li>My Listings</li></Link>}
          <a href="#"><li>Safety</li></a>
          <a href="#"><li>About</li></a>
          {!user.token && <Link to={'/signin'}><li>Login</li></Link>}
          {user.token && <a href="/myprofile"><li>Profile</li></a>}
          {user.token && <a href="#"><li>Logout</li></a>}
          <a href="#"><li>Search</li></a>
        </ul>
      </nav>
    </header>
  );
}

Header.propTypes = {
  user: PropTypes.object
};

export default Header;
