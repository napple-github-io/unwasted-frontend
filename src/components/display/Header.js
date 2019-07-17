import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styles from './Header.css';
import { Link } from 'react-router-dom';
import { endSession } from '../../actions/getUserActions';
import { getUser } from '../../selectors/userAuthSelectors';
import { connect } from 'react-redux';

class Header extends PureComponent {
  static propTypes = {
    user: PropTypes.object,
    logout: PropTypes.func.isRequired
  }

  logoutUser = () => {
    this.props.logout();
  }
  
  render(){
    let { user } = this.props;
    return (
      <header className={styles.header}>
        <a href="/"><aside className={styles.headerLogo}></aside></a>
        <nav>
          <ul>
            <Link to={'/listings'}><li>Listings</li></Link>
            <Link to={'/listings/new'}><li>Post</li></Link>
            {user.token && <Link to={`/listings/user?id=${user.userMongooseId}`}><li>My Listings</li></Link>}
            <a href="#"><li>Safety</li></a>
            <a href="#"><li>About</li></a>
            {!user.token && <Link to={'/signin'}><li>Login</li></Link>}
            {user.token && <Link to={'/myprofile'}><li>Profile</li></Link>}
            {user.token && <Link to="/" onClick={this.logoutUser}><li>Logout</li></Link>}
            {/* <a href="#"><li>Search</li></a> */}
          </ul>
        </nav>
      </header>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  logout(){
    dispatch(endSession());
  }
});

const mapStateToProps = state => ({
  user: getUser(state)
});

Header.propTypes = {
  user: PropTypes.object,
  logout: PropTypes.func
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
