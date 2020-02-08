import React from 'react';
import styles from './Order.module.scss';
import PropTypes from 'prop-types';

const Order = () => (
  <h2 className={styles.component}>Order views
  </h2>
);

Order.propTypes={
  variant: PropTypes.node,
};

export default Order;