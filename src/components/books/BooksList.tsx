import { useEffect, useState } from 'react';

import { booksService } from '../services';
import { Book } from './Book';

import styles from './BooksList.module.scss';

export const BooksList = () => {
  const [books, setBooks] = useState();

  useEffect(() => {
    booksService.getBooks().then((books) => {
      setBooks(books);
    });
  }, []);

  return (
    <div className={styles.booksList}>
      {books && books.map((b) => (
        <Book key={b.id} book={b} />
      ))}
    </div>
  );
};
