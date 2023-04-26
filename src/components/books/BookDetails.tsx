import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

//import { booksService } from '../services';

//import styles from './BookDetails.module.scss';

export const BookDetails = () => {
  /*const [error, setError] = useState();
  const [book, setBook] = useState();
  const { id } = useParams();

  useEffect(() => {
    booksService.getBook(id).then(
      (b) => setBook(b)
    ).catch(
      () => setError(`Error retrieving book ${id}`)
    );
  }, [id]);

  return book ? (
    <div className={styles.book} data-testid="book">
      <div className={styles.title} data-testid="title">
        {book.title}
      </div>
      <div className={styles.author} data-testid="author">
        {book.author}
      </div>
      <div className={styles.resume} data-testid="resume">
        {book.resume}
      </div>
      <button className="btn">
        <Link to="..">Back</Link>
      </button>
    </div>
  ) : (error) ? (
    <div>Error detected</div>
  ) : null;*/
};
