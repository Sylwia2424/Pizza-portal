import React from 'react';
import styles from './NewOrder.module.scss';
import PropTypes from 'prop-types';

const NewOrder = () => (
  <h2 className={styles.component}>NewOrder views
  </h2>
);

NewOrder.propTypes={
  variant: PropTypes.node,
};

export default NewOrder;