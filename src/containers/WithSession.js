import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getToken } from '../selectors/userAuthSelectors';
import loadStyles from './Loader.css';

export const withSession = Component => {
  class withSession extends PureComponent{
    static propTypes = {
      token: PropTypes.string,
      match: PropTypes.object,
      history: PropTypes.object.isRequired
    }

    componentDidMount(){
      if(!this.props.token){
        this.props.history.push('/signin');
      }
    }
    
    render(){
      if(!this.props.token) return (
        <div className={loadStyles.loading}>
          <div className={loadStyles.loader}></div>
        </div>
      );
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
