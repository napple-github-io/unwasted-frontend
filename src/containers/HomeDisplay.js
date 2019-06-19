import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../components/display/Header';
import Footer from '../components/display/Footer';
import NearbyListingThumbList from '../components/listings/NearbyListingThumbList';
import PowerUserList from '../components/userAggregations/PowerUserList';
import { listingSeed, userSeed } from '../assets/seedData/seedData';
import styles from './Home.css';
import { getUser } from '../selectors/userAuthSelectors';

class HomeDisplay extends PureComponent {
  static propTypes = {
    currentUser: PropTypes.object
  }

  render() {
    return (
      <>
      <section className={styles.hero}>
        <Header user={this.props.currentUser} />
        <div>
          <h1>End Hunger<br />In Your<br />Community</h1>
        </div>
      </section>

      <div className={styles.mainHome}>
        <NearbyListingThumbList nearbyListingList={listingSeed} />
        <PowerUserList powerUserList={userSeed} />
      </div>

      <Footer />
      </>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: getUser(state)
});

export default connect(
  mapStateToProps,
  null
)(HomeDisplay);
