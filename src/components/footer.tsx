import React from "react";
import { useNavigate } from "react-router-dom";

export const Footer = () => {
    const navigate = useNavigate();

    return (
        <footer>
            <div className="toContact">
                <a className="contact" onClick={()=>navigate('/contact')}>Nous Contacter</a>
            </div>
        </footer>
    );
}