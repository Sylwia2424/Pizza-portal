import React from 'react';
import styles from './Homepage.module.scss';
import PropTypes from 'prop-types';

const Homepage = () => (
  <h2 className={styles.component}>Homepage views
  </h2>
);

Homepage.propTypes={
  variant: PropTypes.node,
};

export default Homepage;