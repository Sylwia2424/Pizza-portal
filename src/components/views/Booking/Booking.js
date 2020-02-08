import React from 'react';
import styles from './Booking.module.scss';
import PropTypes from 'prop-types';

const Booking = () => (
  <h2 className={styles.component}>Booking views
  </h2>
);

Booking.propTypes={
  variant: PropTypes.node,
};

export default Booking;