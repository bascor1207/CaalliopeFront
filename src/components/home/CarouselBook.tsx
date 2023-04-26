import React from 'react';
import { useNavigate } from 'react-router-dom';
import AliceCarousel from 'react-alice-carousel';

import 'react-alice-carousel/lib/alice-carousel.css';

import styles from './CarouselBook.module.scss';

interface CarouselProps {
    itemsTypes: string;
}

export const CarouselBook: React.FC<CarouselProps> = ({ itemsTypes = '' }) => {
    const navigate = useNavigate();
    const responsive = {
        0: { items: 1 },
        568: { items: 2 },
        1024: { items: 3 },
    };

    const items = [
        <div className="item" key="item" data-value="1">1</div>,
        <div className="item" key="item" data-value="2">2</div>,
        <div className="item" key="item" data-value="3">3</div>,
        <div className="item" key="item" data-value="4">4</div>,
        <div className="item" key="item" data-value="5">5</div>,
    ];

    const LastReleaseBooks = () => (
        <div className={styles.container}>
            <AliceCarousel
                mouseTracking
                items={items}
                responsive={responsive}
                controlsStrategy="alternate"
            />
        </div>
    );

    const PopularBooks = () => (
        <div className={styles.container}>
            <AliceCarousel
                mouseTracking
                items={items}
                responsive={responsive}
                controlsStrategy="alternate"
            />
        </div>
    );

    return <div>{itemsTypes=='release' ? <LastReleaseBooks /> : <PopularBooks />}</div>;
};
