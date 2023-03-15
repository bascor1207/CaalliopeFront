import React from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import styles from './ContactForm.module.scss';

export const ContactForm = () => {
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
                <span className={styles.title}>{t('form.contact')}</span>
                <div className={styles.firstname}>
                    <label>{t('form.firstname')}</label>
                    <input className={styles['firstname-input']} type="text" name="firstname" required />
                    {errors.firstname && <span>{t('form.required')}</span>}
                </div>
                <div className={styles.lastname}>
                    <label>{t('form.lastname')}</label>
                    <input className={styles['lastname-input']} type="text" name="lastname" required />
                    {errors.lastname && <span>{t('form.required')}</span>}
                </div>
                <div className={styles.email}>
                    <label>{t('form.email')}</label>
                    <input className={styles['email-input']} type="email" name="email" required />
                    {errors.email && <span>{t('form.required')}</span>}
                </div>
                <div className={styles.subject}>
                    <label>{t('form.subject')}</label>
                    <input className={styles['subject-input']} type="text" name="subject" required />
                    {errors.subject && <span>{t('form.required')}</span>}
                </div>
                <div className={styles.message}>
                    <label>{t('form.message')}</label>
                    <input className={styles['message-input']} type="text" name="message" required />
                    {errors.message && <span>{t('form.required')}</span>}
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
