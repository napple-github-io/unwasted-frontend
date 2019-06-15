import React from 'react';
import PropTypes from 'prop-types';

function YourProfile({ profile }) {
  return (
    <section>
      <h2>Your Information</h2>
      <p><a href="#">EDIT</a></p>

      <section>
        <img src={profile.image} />
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
        <p>{profile.userName}</p>
        <h4>Name</h4>
        <p>{profile.name}</p>
        <h4>Address</h4>
        <p>
          {profile.address.street}, {profile.address.state} {profile.address.zip}
        </p>
      </section>

      <section>
        <h4>Bio</h4>
        <p>{profile.bio}</p>
      </section>
    </section>
  );
}

YourProfile.propTypes = {
  profile: PropTypes.object.isRequired
};

export default YourProfile;
