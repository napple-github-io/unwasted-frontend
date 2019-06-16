import React from 'react';
import PropTypes from 'prop-types';

function YourProfileDetails({ profile }) {
  return (
    <section>
      <h2>Your Information</h2>
      <p><a href="#">EDIT</a></p>

      <section>
        <img src={profile.userImage} />
        <p>Change profile photo</p>
        <form>
          <input type="file" id="profile-photo-upload" name="upload" accept="image/*" />
          <button>
            Upload
          </button>
        </form>
      </section>


      <section>
        <h4>Username</h4>
        <p>{profile.username}</p>
        <h4>Name</h4>
        <p>{profile.firstName} {profile.lastName}</p>
        <h4>Address</h4>
        <p>
          {profile.location.street}, {profile.location.state} {profile.location.zip}
        </p>
      </section>

      <section>
        <h4>Bio</h4>
        <p>{profile.bio}</p>
      </section>
    </section>
  );
}

YourProfileDetails.propTypes = {
  profile: PropTypes.object.isRequired
};

export default YourProfileDetails;
