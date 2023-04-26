import { useTranslation } from 'react-i18next';
import { CarouselBook } from '../../components/home/CarouselBook';

import styles from './HomePage.module.scss';

const HomePage = () => {
    const { t } = useTranslation();
    return (
        <div className={styles.container}>
            <div className={styles['last-release']}>
                Last Release Book
            </div>
            <div className={styles.carousel}>
                <CarouselBook itemsTypes='release' />
            </div>
            
            <div className={styles.popular}>
                Popular Book
            </div>
            <div className={styles.carousel}>
                <CarouselBook itemsTypes='popular' />
            </div>
            
        </div>
    );
};

export default HomePage;
