import React from 'react';
import PropTypes from 'prop-types';
import PowerUser from './PowerUser';
import styles from '../listings/Listings.css';

function PowerUserList({ powerUserList }) {
  const listItem = powerUserList.map(powerUser => (
    <li key={powerUserList}>
      <PowerUser powerUser={powerUser} />
    </li>
  ));

  return (
    <section className={styles.listings}>
      <header>
        <h2>Power Users</h2>
        <p>
          <a href="#">View All</a>
        </p>
      </header>
      <ul>
        {listItem}
      </ul>
    </section>
  );
}

PowerUserList.propTypes = {
  powerUserList: PropTypes.array.isRequired
};

export default PowerUserList;
