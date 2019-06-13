import React from 'react';
import PropTypes from 'prop-types';
import PowerUser from './PowerUser';

function PowerUserList({ powerUserList }) {
  const listItem = powerUserList.map(powerUser => (
    <li key={powerUserList}>
      <PowerUser powerUser={powerUser} />
    </li>
  ));

  return (
    <section>
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
