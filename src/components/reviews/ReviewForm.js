import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './ReviewForm.css';

function ReviewForm({ currentUser, reviewee, onChange, onSubmit }) {
  return (
    <section className={styles.reviewFormContainer}>

      <section>
        <h4>Review {reviewee.username}</h4>
      </section>

      <form onSubmit={onSubmit}>
        <textarea name="reviewText" placeholder="Tell us how you feel..." onChange={onChange}></textarea>

        <section>
          <div id={styles.thumbs}>
            <label id={styles.up}>
              <input type="radio" value="true" name="thumbsUp" onChange={onChange}></input>
              <div id={styles.thumbsUp}></div>
            </label>

            <label id={styles.down}>
              <input type="radio" value="false" name="thumbsUp" onChange={onChange}></input>
              <div id={styles.thumbsDown}></div>
            </label>
          </div>
        
          <div>
            {currentUser.token && <button>Submit</button>}
            {!currentUser.token && <Link to={'/signin'}><button >Sign In To Leave Review</button></Link>}
          </div>
        </section>

      </form>
    </section>
  );
}

ReviewForm.propTypes = {
  reviewee: PropTypes.object.isRequired,
  currentUser: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default ReviewForm;
