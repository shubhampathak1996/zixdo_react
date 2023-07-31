import React, { useState } from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../../components/layout/Spinner';

const PrivateRoute = ({
  component: Component,

  ...rest
}) => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    window.localStorage.getItem('ZIXDO_TOKEN')
      ? window.localStorage.getItem('ZIXDO_TOKEN')
      : null
  );
  return (
    <Route
      {...rest}
      render={(props) =>
        loading ? (
          <Spinner />
        ) : isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};

PrivateRoute.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(PrivateRoute);
