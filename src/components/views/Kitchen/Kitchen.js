import React from 'react';
import styles from './Kitchen.module.scss';
import PropTypes from 'prop-types';

const Kitchen = () => (
  <h2 className={styles.component}>Kitchen views
  </h2>
);

Kitchen.propTypes={
  variant: PropTypes.node,
};

export default Kitchen;