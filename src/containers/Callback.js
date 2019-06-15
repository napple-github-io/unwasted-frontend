import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setSession } from '../actions/getUserActions';
import { getUserAuthId } from '../selectors/userAuthSelectors';

class Callback extends PureComponent {
  static propTypes = {
    handleAuth: PropTypes.func.isRequired,
    authId: PropTypes.string
  }

  componentDidMount() {
    this.props.handleAuth();
  }

  render() {
    return <h1>Call me maybe</h1>;
  }
}

const mapDispatchToProps = (dispatch, props) => ({
  handleAuth() {
    const action = setSession();
    dispatch(action);
    action.payload.then(() => {
      props.history.push('/listings/new');
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
