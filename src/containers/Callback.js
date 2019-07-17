import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setSession } from '../actions/getUserActions';
import { getUserAuthId } from '../selectors/userAuthSelectors';
import styles from './Loader.css';

class Callback extends PureComponent {
  
  static propTypes = {
    handleAuth: PropTypes.func.isRequired,
    authId: PropTypes.string
  }
  
  componentDidMount() {
    this.props.handleAuth();
  }

  render() {
    return (
      <div className={styles.loading}>
        <div className={styles.loader}></div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch, props) => ({
  handleAuth() {
    const action = setSession();
    dispatch(action);
    action.payload.then(() => {
      props.history.push('/');
    });
  }
});

const mapStateToProps = state => ({
  authId: getUserAuthId(state)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Callback);
