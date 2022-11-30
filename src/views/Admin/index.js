import { NavLink, Routes, Route } from 'react-router-dom';

import { NavBar } from '../../components/NavBar';
import { AddBook } from './components/AddBook';
import { AddAuthor } from './components/AddAuthor';
import { withAuth } from '../../hoc';

import styles from './Admin.module.scss';

export const Admin = withAuth(() => (
  <div className={styles.admin}>
    <NavBar bgColor="white" fgColor="black">
      <NavLink to="add-book">Add new book</NavLink>
      <NavLink to="add-author">Add new author</NavLink>
    </NavBar>
    <Routes>
      <Route path="add-book" element={<AddBook />} />
      <Route path="add-author" element={<AddAuthor />} />
    </Routes>
  </div>
));

export default Admin;
