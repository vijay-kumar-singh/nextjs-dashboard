import React, { useState } from 'react';
import styles from './GlobalLoader.module.css';

const GlobalLoader: React.FC<{ isLoading: boolean }> = ({ isLoading }) => {
  return (
    isLoading ? (
      <div className={styles.loaderOverlay}>
        <div className={styles.loader}>
          <div className={styles.spinner}></div>
        </div>
      </div>
    ) : null
  );
};

export default GlobalLoader;
