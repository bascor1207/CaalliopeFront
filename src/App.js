import { Navigate, NavLink, Routes, Route } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useEffect, lazy, Suspense } from 'react';

import { NavBar, NavBarAuth, NavBarLang, Loader } from './components';
import { STORAGE_KEY, storageService } from './services';

import styles from './App.module.scss';
import { Header } from './components/header';
import { Footer } from './components/footer';

const PageNotFound = lazy(() => import('./views/PageNotFound'));
const Books = lazy(() => import('./views/Books'));
const Admin = lazy(() => import('./views/Admin'));
const Login = lazy(() => import('./views/Login'));

const LoadComponent = (Component) => (
  <Suspense fallback={<Loader />}>
    <Component />
  </Suspense>
);

const App = () => {
  const { t, i18n, ready } = useTranslation();

  useEffect(() => {
    const locale = storageService.get(STORAGE_KEY.LOCALE);
    i18n.changeLanguage(locale || 'fr');
  }, []);

  const handleLocaleChange = (locale) => {
    storageService.set(STORAGE_KEY.LOCALE, locale);
    i18n.changeLanguage(locale);
  }

  return ready ? (
    <div className={styles.app} data-testid="app">
      {/*<NavBar bgColor="darkcyan" fgColor="white">
        <NavLink to="/books">{t('NAVBAR.LINKS.BOOKS')}</NavLink>
        <NavLink to="/admin">{t('NAVBAR.LINKS.ADMIN')}</NavLink>
        <NavBarLang locale={i18n.language} changeLocale={handleLocaleChange} />
        <NavBarAuth />
  </NavBar>*/}
      <Header/>
      <main>

      </main>
      <Footer/>
      <Routes>
        <Route path="/" element={<Navigate to="/books" replace />} />
        <Route path="/login" element={LoadComponent(Login)} />
        <Route path="/books/*" element={LoadComponent(Books)} />
        <Route path="/admin/*" element={LoadComponent(Admin)} />
        <Route path="*" element={LoadComponent(PageNotFound)} />
      </Routes>
    </div>
  ) : null;
};

export default App;
