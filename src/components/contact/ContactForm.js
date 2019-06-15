import React from 'react';
import PropTypes from 'prop-types';

function ContactForm({ user }) {
  return (
    <section>

      <header>
        <h2>Contact {user.userName}</h2>
      </header>
      
      <section>
        <div className="user-image-container">
          <img src={user.userImage} alt={user.userName} />
        </div>
        <h4>{user.userName}</h4>
      </section>

      <section>
        <h4>Name</h4>
        <input type="text" placeholder="Name" />

        <h4>Email</h4>
        <input type="text" placeholder="Email" />

        <textarea placeholder="Don't be shy..."></textarea>

        <input type="checkbox" name="legal" required/>Consent blurb
        <button>SUBMIT</button>
      </section>

    </section>
  );
}

ContactForm.propTypes = {
  user: PropTypes.object.isRequired
};

export default ContactForm;
