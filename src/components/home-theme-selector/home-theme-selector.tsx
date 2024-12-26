'use client';

import styles from './home-theme-selector.module.scss';
import { useContext } from 'react';
import { ThemeContext } from 'src/providers/theme-context-provider';

export const HomeThemeSelector = () => {
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <div className={styles.container}>
      {/* Dark Theme Button */}
      <button
        className={`${styles.themeButton} ${styles.darkButton}`}
        onClick={() => toggleTheme('dark')}
        title="Dark Theme"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          className={styles.icon}
        >
          <path d="M21.75 15.5c-1.15.58-2.4.9-3.75.9a8.25 8.25 0 0 1 0-16.5 8.22 8.22 0 0 1 3.75.9A9 9 0 1 0 21.75 15.5Z" />
        </svg>
      </button>

      {/* Light Theme Button */}
      <button
        className={`${styles.themeButton} ${styles.lightButton}`}
        onClick={() => toggleTheme('light')}
        title="Light Theme"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          className={styles.icon}
        >
          <path d="M12 7.5a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9ZM12 0v3M12 21v3M3 12H0M24 12h-3M4.9 4.9l-2.1 2.1M19.1 19.1l-2.1-2.1M4.9 19.1l-2.1-2.1M19.1 4.9l-2.1 2.1" />
        </svg>
      </button>

      {/* OS Default Theme Option */}
      <p className={styles.osSection}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="18"
          height="18"
          className={styles.osIcon}
          fill="#888"
        >
          <path d="M12 1L15 9H21L16.5 13L18 21L12 16.5L6 21L7.5 13L3 9H9L12 1Z" />
        </svg>
        &nbsp;...or let the OS{' '}
        <button
          className={styles.osDefault}
          onClick={() => toggleTheme('os default')}
        >
          decide
        </button>{' '}
        for you!
      </p>
    </div>
  );
};
