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
                <span className={styles.title}>Contact</span>
                <div className={styles.firstname}>
                    <label>Firstname</label>
                    <input className={styles['firstname-input']} type="text" name="firstname" required />
                    {errors.firstname && <span>Required</span>}
                </div>
                <div className={styles.lastname}>
                    <label>Lastname</label>
                    <input className={styles['lastname-input']} type="text" name="lastname" required />
                    {errors.lastname && <span>Required</span>}
                </div>
                <div className={styles.email}>
                    <label>Email</label>
                    <input className={styles['email-input']} type="email" name="email" required />
                    {errors.email && <span>Required</span>}
                </div>
                <div className={styles.subject}>
                    <label>Subject</label>
                    <input className={styles['subject-input']} type="text" name="subject" required />
                    {errors.subject && <span>Required</span>}
                </div>
                <div className={styles.message}>
                    <label>Message</label>
                    <input className={styles['message-input']} type="text" name="message" required />
                    {errors.message && <span>Required</span>}
                </div>
                <div className={styles.buttons}>
                    <button className={styles.submit} type="submit">
                        Send
                    </button>
                </div>
            </div>
        </form>
    );
};
