import React, { useState } from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../../components/layout/Spinner';

const BeforeLoginRoutes = ({
  component: Component,
  redirectTo,

  ...rest
}) => {
  const [loading, setLoading] = useState(false);
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
          <Redirect to={redirectTo ? redirectTo : '/my-profile'} />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

BeforeLoginRoutes.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(BeforeLoginRoutes);
