import PropTypes from 'prop-types';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

import { booksService } from '../services';
import styles from './Book.module.scss';

const DEBOUNCE_VALUE = 500;
const MIN_STOCK = 2;

export const Book = ({ book }: any) => {
  const [stock, setStock] = useState(book.stock);
  const [stockStyle, setStockStyle] = useState();
  const timerId = useRef();

  useEffect(() => {
    setStockStyle(stock <= MIN_STOCK ? styles.lowStock : undefined);
    // return () => console.log('EFFECT OUT', stock);
  }, [stock]);

  const updateStock = (increment: any) => {
    let newStock = stock + increment;
    newStock = newStock > 0 ? newStock : 0;

    if (newStock !== stock) {
      setStock(newStock);
      debounce(newStock);
    }
  };

  const debounce = (newStock: any) => {
    if (timerId.current) {
      clearTimeout(timerId.current);
    }
    timerId.current = setTimeout(() => {
      booksService.updateStock(book.id, newStock).then((b) => {
        // console.log('STOCK CHANGED', b);
      });
    }, DEBOUNCE_VALUE);
  };

  return (
    <div className={styles.book}>
      <div className={styles.infos}>
        <Link to={`${book.id}`}>
          <div className={styles.title} data-testid="title">
            {book.title}
          </div>
          <div className={styles.author} data-testid="author">
            {book.author}
          </div>
        </Link>
      </div>
      <div className={styles.commands}>
        <button
          onClick={() => updateStock(-1)}
          data-testid="less"
        >-</button>
        <button
          onClick={() => updateStock(+1)}
          data-testid="more"
        >+</button>
        <span className={stockStyle}>{stock}</span>
      </div>
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string,
    author: PropTypes.string
  }).isRequired
};
