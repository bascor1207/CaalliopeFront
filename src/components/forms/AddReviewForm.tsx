import React from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import styles from './AddReviewForm.module.scss';

export const AddReviewForm = () => {
    const { t } = useTranslation();
    const {
        formState: { errors }
    } = useForm();

    const onSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
    };

    return (
        <form onSubmit={onSubmit}>
            <div className={styles.container}>
                <span className={styles.title}>{t('form.addReview')}</span>
                <div className={styles.review}>
                    <label>{t('form.review')}</label>
                    <input className={styles['review-input']} type="text" name="review" required />
                    {errors.review && <span>{t('form.required')}</span>}
                </div>
                <div className={styles.buttons}>
                    <button className={styles.submit} type="submit">
                        {t('form.send')}
                    </button>
                </div>
            </div>
        </form>
    );
};
