import React from 'react';
import PropTypes from 'prop-types';

function Review({ review }) {
  return (
    <>
    <section>
      <img src={review.image} />
      <div>
        <h4>{review.name}</h4>
      </div>
    </section>

    <div>
      <h4>{review.reccomended}</h4>
      <p>{review.content}</p>
    </div>
    </>
  );
}

Review.propTypes = {
  review: PropTypes.object.isRequired
};

export default Review;
