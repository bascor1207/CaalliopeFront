import { Routes, Route } from 'react-router-dom';

import { BookDetails } from '../../components/books/BookDetails';
import { BooksList } from '../../components/books/BooksList';

import styles from './Books.module.scss';

const BooksPage = () => {
  return (
    <div className={styles.books}>
      <Routes>
        <Route index element={<BooksList />} />
        <Route path=":id" element={<BookDetails />} />
      </Routes>
    </div>
  );
};

export default BooksPage;
