import { Routes, Route } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { Header } from './components/header/Header';
import { Footer } from './components/footer/Footer';

import BooksPage from './views/Books/BooksPage';
import AdminPage from './views/Admin/AdminPage';
import { LoginRegisterPage } from './views/Login/LoginPage';

//import { STORAGE_KEY, storageService } from './services';

import styles from './App.module.scss';

export const App = () => {
  const { i18n, ready } = useTranslation();

  /*useEffect(() => {
    const locale = storageService.get(STORAGE_KEY.LOCALE);
    i18n.changeLanguage(locale || 'fr');
  }, []);

  const handleLocaleChange = (locale: any) => {
    storageService.set(STORAGE_KEY.LOCALE, locale);
    i18n.changeLanguage(locale);
  }*/

  return ready ? (
    <div className={styles.app} data-testid="app">
      {/*<NavBar bgColor="darkcyan" fgColor="white">
        <NavLink to="/books">{t('NAVBAR.LINKS.BOOKS')}</NavLink>
        <NavLink to="/admin">{t('NAVBAR.LINKS.ADMIN')}</NavLink>
        <NavBarLang locale={i18n.language} changeLocale={handleLocaleChange} />
        <NavBarAuth />
      </NavBar>*/}
      <header className={styles.header}>
        <Routes>
          <Route path="/" element={<Header />} />
          {/*<NavBarLang locale={i18n.language} changeLocale={handleLocaleChange} />*/}
        </Routes>
      </header>
      <Routes>
        <Route path="/login" element={<LoginRegisterPage />} />
        <Route path="/books/*" element={<BooksPage />} />
        <Route path="/admin/*" element={<AdminPage />} />
        {/*<Route path="*" element={<PageNotFound />} />*/}
      </Routes>
      <footer>
        <Footer />
      </footer>
    </div>
  ) : null;
};

export default App;
