import React from 'react';
import PropTypes from 'prop-types';
import styles from './Review.css';

function Review({ review, userInfo }) {

  let thumbs = review.thumbsUp ? 'Recommended' : 'Not Recommended';
  console.log(userInfo);
  return (
    <section className={styles.reviewGrid}>
      <section className={styles.left}>
        <div>
          <img src={userInfo.userImage || 'https://i.imgur.com/O5tm3Du.jpg'} />
        </div>
        <h5>{review.reviewer.username}</h5>
      </section>

      <div className={styles.right}>
        <h4>{thumbs}</h4>
        <p className={styles.reviewTimestamp}>Posted {review.postedDate}</p>
        <p>{review.reviewText}</p>
      </div>

      {/* <a href="#" className={styles.reportLink}>REPORT</a> */}
    </section>
  );
}

Review.propTypes = {
  review: PropTypes.object.isRequired,
  userInfo: PropTypes.object.isRequired
};

export default Review;
