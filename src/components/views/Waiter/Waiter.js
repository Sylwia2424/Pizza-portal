import React from 'react';
import styles from './Waiter.module.scss';
import PropTypes from 'prop-types';

const Waiter = () => (
  <h2 className={styles.component}>Waiter views
  </h2>
);

Waiter.propTypes={
  variant: PropTypes.node,
};

export default Waiter;