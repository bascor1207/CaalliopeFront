import { Routes, Route } from 'react-router-dom';

import { BookDetails } from './components/BookDetails';
import { BooksList } from './components/BooksList';

import styles from './Books.module.scss';

export const Books = () => {
  return (
    <div className={styles.books}>
      <Routes>
        <Route index element={<BooksList />} />
        <Route path=":id" element={<BookDetails />} />
      </Routes>
    </div>
  );
};

export default Books;
