import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import { FormError } from '../forms/FormError';

import styles from './AddBook.module.scss';

export const AddBook = () => {
    const { register, formState: { errors } } = useForm();
    const [errorMessage, setErrorMessage] = useState();
    const [authors, setAuthors] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
    /*adminService.getAuthorsNames().then((authorsList) => {
      setAuthors(authorsList);
    });*/
    }, []);

    const back = () => {
        navigate('..');
    };

    const onSubmit: React.FormEventHandler<HTMLFormElement> = (book) => {
    /*adminService.createBook({
      ...book,
      stock: +book.stock
    }).then((b) => {
      console.log('Book created', b);
      back();
    }).catch((err) => {
      setErrorMessage(err.message || 'Unknown error detected');
    });*/
    };

    return (
        <form className="form" onSubmit={onSubmit}>
            {errorMessage && (
                <div className="form-error">
                    {errorMessage}
                </div>
            )}
            <div className="form-field">
                <label htmlFor="title">Title</label>
                <input id="title" {...register('title', { required: true, minLength: 2 })} />
                <FormError error={errors.title} />
            </div>
            <div className="form-field">
                <label htmlFor="author">Author</label>
                <select id="author" {...register('author', { required: true, minLength: 2 })}>
                    <option key="0" value="">Select author...</option>
                    {authors.map((author) => (
                        <option key={author} value={author}>{author}</option>
                    ))}
                </select>
                <FormError error={errors.author} />
            </div>
            <div className="form-field">
                <label htmlFor="resume">Resume</label>
                <textarea id="resume" {...register('resume', { minLength: 10 })} />
                <FormError error={errors.resume} />
            </div>
            <div className="form-field">
                <label htmlFor="stock">Stock</label>
                <input className={styles.stock} id="stock" type="number" min="0" {...register('stock', { required: true, min: 0, value: 0 })} />
                <FormError error={errors.stock} />
            </div>
            <div className="form-commands">
                <button className="btn" type="button" onClick={back}>
          Cancel
                </button>
                <button className="btn primary" type="submit">
          Save
                </button>
            </div>
        </form>
    );
};
