import React from 'react';
import styles from './Ordering.module.scss';
import PropTypes from 'prop-types';

const Ordering = () => (
  <h2 className={styles.component}>Ordering views
  </h2>
);

Ordering.propTypes={
  variant: PropTypes.node,
};

export default Ordering;