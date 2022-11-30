import PropTypes from 'prop-types';

import styles from './NavBarLang.module.scss';

export const NavBarLang = ({ locale, changeLocale }) => {
  const isActive = (lang) => locale === lang ? styles.active : '';

  return (
    <div className={styles.lang}>
      <span onClick={() => changeLocale('fr')} className={isActive('fr')}>
        FR
      </span>
      <span onClick={() => changeLocale('en')} className={isActive('en')}>
        EN
      </span>
    </div>
  );
};

NavBarLang.propTypes = {
  changeLocale: PropTypes.func.isRequired,
  locale: PropTypes.string.isRequired
};
