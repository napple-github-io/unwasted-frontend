import React from 'react';
import PropTypes from 'prop-types';
import styles from './ContactForm.css';

function ContactForm({ receivingUser, onChange, onSubmit }) {
  return (
    <section className={styles.contactFormContainer}>

      <header>
        <h4>Contact {receivingUser.username}</h4>
      </header>
      
      {/* <section>
        <div className="user-image-container">
          <img src={receivingUser.userImage} alt={receivingUser.username} />
        </div>
        <h4>{receivingUser.username}</h4>
      </section> */}

      <form onSubmit={onSubmit} className={styles.contactForm}>
        {/* <h4>Send an email to {receivingUser.username}</h4> */}

        <textarea name="message" placeholder="Say hello!" onChange={onChange}></textarea>

        <label><input type="checkbox" name="legal" required/>Consent blurb</label>
        <button>Send Message</button>
      </form>

    </section>
  );
}

ContactForm.propTypes = {
  receivingUser: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default ContactForm;
