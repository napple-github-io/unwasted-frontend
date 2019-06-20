import React from 'react';
import PropTypes from 'prop-types';
import styles from './MyProfileDetails.css';

function MyProfileDetails({ profile }) {
  return (
    <section className={styles.myProfileContainer}>
      <div id={styles.yourInformation}>
        <h2>Your Information</h2>
        <p><a href="#">EDIT</a></p>
      </div>

      <section className={styles.myProfileGrid}>
        <section>
          <div>
            <img src={profile.userImage} />
          </div>
          <h5>Change profile photo</h5>
          <form>
            <input type="file" className={styles.imageUpload} name="upload" accept="image/*" />
          </form>
        </section>


        <section>
          <h4>Username</h4>
          <p>{profile.username}</p>
          <h4 className={styles.h4Margin}>Name</h4>
          <p>{profile.firstName} {profile.lastName}</p>
          <h4 className={styles.h4Margin}>Address</h4>
          <p>
            {profile.location.street}<br />{profile.location.state} {profile.location.zip}
          </p>
        </section>

        <section>
          <h4>Bio</h4>
          <p>{profile.bio}</p>
        </section>
      </section>

    </section>
  );
}

MyProfileDetails.propTypes = {
  profile: PropTypes.object.isRequired
};

export default MyProfileDetails;
