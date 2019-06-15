import React from 'react';
import PropTypes from 'prop-types';

function Review({ review }) {
  return (
    <>
    <section>
      <img src={review.image} />
      <div>
        <h4>{review.userName}</h4>
      </div>
    </section>

    <div>
      <h4>{review.reccomended}</h4>
      <p className="review-timestamp">Posted $TIME $DATE</p>
      <p>{review.content}</p>
      <a href="#" className="report-link">REPORT</a>
    </div>
    </>
  );
}

Review.propTypes = {
  review: PropTypes.object.isRequired
};

export default Review;
