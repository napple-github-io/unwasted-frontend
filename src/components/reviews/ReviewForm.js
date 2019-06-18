import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function ReviewForm({ currentUser, reviewee, onChange, onSubmit }) {
  return (
    <section>

      <section>
        <h4>Review ${reviewee.username}</h4>
      </section>

      <section>
        <form onSubmit={onSubmit}>
          <textarea name="review" placeholder="Tell us how ya really feel..." onChange={onChange}></textarea>
          <label><input type="radio" value="true"></input>Up</label>
          <label><input type="radio" value="false"></input>Down</label>
          {currentUser.token && <button>Submit Review</button>}
          {!currentUser.token && <button disabled={'true'}>Submit Review</button>}
          {!currentUser.token && <Link to={'/signin'}>Sign In To Leave Review</Link>}
        </form>
      </section>
       
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
