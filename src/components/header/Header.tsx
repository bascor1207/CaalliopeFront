import React from "react";
import { useNavigate } from 'react-router-dom';

export const Header = () => {    
    const navigate = useNavigate();
    {/*const { success: isLogged } = useselector(({ auth }) => auth.login);
    const { success: isRegistered } = useselector(({ auth }) => auth.register);
    const handleLogout = () => {
        dispatch(onLogOut());
        dispatch(logout());
    };*/}

    return (
        <header>
            <div className="logo">
                <img src="" alt="picture" />
            </div>
            <div className="navbar">
                <a className="library" onClick={()=>navigate('/account')}>Bibliothèque</a>
                <a className="login" onClick={()=>navigate('/login')}>Se Connecter</a>
                {/*(isLogged || isRegistered) && (
                    <button className={styles.logout} onClick={() => handleLogout()}>
                        Log Out
                    </button>
                )*/}
            </div>
        </header>
    );
};