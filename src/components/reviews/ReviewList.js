import React from 'react';
import PropTypes from 'prop-types';
import Review from './Review';

function ReviewList({ reviewList }) {
  const listItem = reviewList.map(review => (
    <li key={reviewList}>
      <Review review={review} />
    </li>
  ));

  return (
    <section>
      <header>
        <h2>Reviews</h2>
      </header>
      <ul>
        {listItem}
      </ul>
    </section>
  );
}

ReviewList.propTypes = {
  reviewList: PropTypes.array.isRequired
};

export default ReviewList;
