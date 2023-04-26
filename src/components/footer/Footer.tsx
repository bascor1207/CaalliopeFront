import React from 'react';
import { useNavigate } from 'react-router-dom';

export const Footer = () => {
    const navigate = useNavigate();

    return (
        <footer>
            <div className="toContact" onClick={()=>navigate('/contact')}>Nous contacter</div>
        </footer>
    );
};
