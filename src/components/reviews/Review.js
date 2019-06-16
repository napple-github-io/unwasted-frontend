import React from 'react';
import PropTypes from 'prop-types';

function Review({ review }) {
  return (
    <>
    <section>
      <img src={review.reviewer.userImage} />
      <div>
        <h4>{review.reviewer.username}</h4>
      </div>
    </section>

    <div>
      <h4>{review.thumbsUp}</h4>
      <p className="review-timestamp">Posted {review.postedDate}</p>
      <p>{review.reviewText}</p>
      <a href="#" className="report-link">REPORT</a>
    </div>
    </>
  );
}

Review.propTypes = {
  review: PropTypes.object.isRequired
};

export default Review;
