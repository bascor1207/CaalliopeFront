import { useModal } from '../../hooks/modal.hook';
import { Modal } from '../../modal/modal';
import { ContactForm } from '../forms/ContactForm';

import styles from './Footer.module.scss';

export const Footer = () => {
    const { isShown, toggle } = useModal();

    return (
        <div className={styles.footer}>
            <div className={styles.contact} onClick={toggle}>Nous contacter</div>
            <Modal isShown={isShown} hideModal={toggle} modalContent={<ContactForm />} />
        </div>
    );
};
