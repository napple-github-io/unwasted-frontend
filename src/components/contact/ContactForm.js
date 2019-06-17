import React from 'react';
import PropTypes from 'prop-types';

function ContactForm({ sendingUser, receivingUser, onChange, onSubmit }) {
  // console.log('sending', sendingUser);
  // console.log('reciepient', receivingUser);
  return (
    <section>

      <header>
        <h2>Contact {receivingUser.username}</h2>
      </header>
      
      <section>
        <div className="user-image-container">
          <img src={receivingUser.userImage} alt={receivingUser.username} />
        </div>
        <h4>{receivingUser.username}</h4>
      </section>

      <section>
        <form onSubmit={onSubmit}>
          <h4>Send an email to {receivingUser.username}</h4>

          <textarea name="message" placeholder="Don't be shy..." onChange={onChange}></textarea>

          <input type="checkbox" name="legal" required/>Consent blurb
          <button>SUBMIT</button>
        </form>
      </section>

    </section>
  );
}

ContactForm.propTypes = {
  user: PropTypes.object.isRequired
};

export default ContactForm;
