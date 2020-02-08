import React from 'react';
import styles from './Tables.module.scss';
import PropTypes from 'prop-types';

const Tables = () => (
  <h2 className={styles.component}>Tables views
  </h2>
);

Tables.propTypes={
  variant: PropTypes.node,
};

export default Tables;