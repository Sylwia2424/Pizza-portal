import React from 'react';
import styles from './Login.module.scss';
import PropTypes from 'prop-types';

const Login = () => (
  <h2 className={styles.component}>Login views
  </h2>
);

Login.propTypes={
  variant: PropTypes.node,
};

export default Login;