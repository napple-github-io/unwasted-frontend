import React from 'react';
import PropTypes from 'prop-types';
import styles from './PowerUser.css';

function PowerUser({ powerUser }) {
  return (
    <section className={styles.PowerUser}>
      <div className={styles.userPhotoMid}>
        <img src={powerUser.userImage} alt={powerUser.username} />
      </div>
      
      <div>
        <span>
          <h4>{powerUser.username}</h4>
        </span>
        <p>{powerUser.listingCount} Listings</p>
        <p id={styles.bio}>{powerUser.bio}</p>
      </div>
    </section>
  );
}

PowerUser.propTypes = {
  powerUser: PropTypes.object.isRequired
};

export default PowerUser;
