import React from 'react';
import { useTranslation } from 'react-i18next';
import { CarouselBook } from '../../components/home/CarouselBook';
import styles from './HomePage.module.scss';

const HomePage = () => {
    const { t } = useTranslation();
    return (
        <div className={styles.container}>
            <div className={styles['last-release']}>
                {t('home.lastRelease')}
                <CarouselBook itemsTypes='release' />
            </div>
            <div className={styles.popular}>
                {t('home.popular')}
                <CarouselBook itemsTypes='popular' />
            </div>
        </div>
    );
};

export default HomePage;
