import { NavLink, Routes, Route } from 'react-router-dom';

import { AddBook } from '../../components/admin/AddBook';
import { AddAuthor } from '../../components/admin/AddAuthor';
//import { withAuth } from '../../hoc';

import styles from './AdminPage.module.scss';

const AdminPage = /*withAuth(*/() => (
    <div className={styles.admin}>
        {/*<NavBar bgColor="white" fgColor="black">
      <NavLink to="add-book">Add new book</NavLink>
      <NavLink to="add-author">Add new author</NavLink>
    </NavBar>*/}
        <Routes>
            <Route path="add-book" element={<AddBook />} />
            <Route path="add-author" element={<AddAuthor />} />
        </Routes>
    </div>
);

export default AdminPage;
