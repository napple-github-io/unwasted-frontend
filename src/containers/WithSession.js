import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getToken } from '../selectors/userAuthSelectors';

export const withSession = Component => {
  class withSession extends PureComponent{
    static propTypes = {
      token: PropTypes.string,
      match: PropTypes.object,
      history: PropTypes.object.isRequired
    }

    componentDidMount(){
      if(!this.props.token){
        this.props.history.push('/');
      }
    }
    
    render(){
      if(!this.props.token) return <h1>Loading</h1>;
      return <Component match={this.props.match}/>;
    }
  }
  
  const mapStateToProps = state => ({
    token: getToken(state)
  });
  
  return connect(
    mapStateToProps,
    null
  )(withSession);
};
