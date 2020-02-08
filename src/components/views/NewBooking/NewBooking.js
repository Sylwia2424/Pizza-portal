import React from 'react';
import styles from './NewBooking.module.scss';
import PropTypes from 'prop-types';

const NewBooking = () => (
  <h2 className={styles.component}>NewBooking views
  </h2>
);

NewBooking.propTypes={
  variant: PropTypes.node,
};

export default NewBooking;