import { useMemo } from 'react';

import styles from './NavBar.module.scss';

export const NavBar = ({ children, fgColor = 'black', bgColor = 'white' }) => {
  const navStyle = useMemo(() => ({
    backgroundColor: bgColor,
    color: fgColor
  }), [bgColor, fgColor]);

  return (
    <nav className={styles.navbar} style={navStyle}>
      {children}
    </nav>
  );
};
