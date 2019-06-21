import React from 'react';
import PropTypes from 'prop-types';
import Review from './Review';
import styles from './ReviewList.css';

function ReviewList({ reviewList, userInfo }) {
  const listItem = reviewList.map(review => (
    <li className={styles.li} key={review._id}>
      <Review review={review} userInfo={userInfo} />
    </li>
  ));

  return (
    <section className={styles.reviewList}>
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
  reviewList: PropTypes.array.isRequired,
  userInfo: PropTypes.object.isRequired
};

export default ReviewList;
