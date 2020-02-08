import React from 'react';
import styles from './BookingId.module.scss';
import PropTypes from 'prop-types';

const BookingId = () => (
  <h2 className={styles.component}>BookingId views
  </h2>
);

BookingId.propTypes={
  variant: PropTypes.node,
};

export default BookingId;