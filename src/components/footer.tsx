import React from "react";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";

export const Footer = () => {
    const navigate = useNavigate();
    const {t} = useTranslation();
    return (
        <footer>
            <div className="toContact" onClick={()=>navigate('/contact')}>{t('Nous contacter')}</div>
        </footer>
    );
}