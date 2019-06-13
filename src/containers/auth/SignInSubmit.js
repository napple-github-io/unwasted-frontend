import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { signInUser } from '../../actions/getUserActions';
import SignInForm from '../../components/auth/SignInForm';

class SignInSubmit extends PureComponent {
  static propTypes = {
    signIn: PropTypes.func.isRequired
  }

  state = {
    email: '',
    password: ''
  }

  onChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  onSubmit = event => {
    event.preventDefault();
    const { email, password } = this.state;
    this.props.signIn(email, password);
  }

  render() {
    const { email, password } = this.state;

    return <SignInForm email={email} password={password} onSubmit={this.onSubmit} onChange={this.onChange} />;
  }

}

const mapDispatchToProps = dispatch => ({
  signIn(email, password) {
    dispatch(signInUser(email, password));
  }
});

export default connect(
  null,
  mapDispatchToProps
)(SignInSubmit);
